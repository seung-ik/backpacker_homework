import React, { useState } from "react";
import "./style.css";

const Disable = () => {
  const [isLogin] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <div className="disable-outterbox">
        <textarea disabled={!isLogin} className="disable-box">
          로그인이 필요한 서비스입니다.
        </textarea>
        <div className="disable-maxlength">500</div>
      </div>
    </div>
  );
};

export default Disable;
