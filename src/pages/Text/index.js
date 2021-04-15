import React from "react";
import Header from "components/Header";
import DefaultInput from "components/DefaultInput";

const Text = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
        <DefaultInput />
      </div>
    </div>
  );
};

export default Text;
