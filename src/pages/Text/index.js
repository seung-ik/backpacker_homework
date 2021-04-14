import React, { useState, useCallback } from "react";
import Header from "components/Header";

const Text = () => {
  const [maxLength, setMaxLength] = useState(300);
  const [maxLengthInputValue, setMaxLengthInputValue] = useState("");
  const onChangeMaxLengthInputValue = useCallback((e) => {
    setMaxLengthInputValue(e.target.value);
  }, []);

  return (
    <div>
      <Header />
      <form>
        <input type="number" value={maxLengthInputValue} onChange={onChangeMaxLengthInputValue} />
      </form>
      <div style={{ border: "1px solid black", position: "relative", width: "800px" }}>
        <input type="text" maxLength={maxLength} style={{ width: "90%", height: "70px", border: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0 }}>{0}</div>
      </div>
    </div>
  );
};

export default Text;
