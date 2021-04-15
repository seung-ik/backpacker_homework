import React from "react";

const Readonly = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <form className="disable-outterbox">
        <input readOnly className="disable-box" value="요청사항을 확인했습니다(읽기 전용)" />
        <div className="disable-maxlength">500</div>
      </form>
    </div>
  );
};

export default Readonly;
