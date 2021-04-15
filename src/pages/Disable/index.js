import React, { useState } from "react";
import "./style.css";

const Disable = () => {
  const [isLogin] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <form className="disable-outterbox">
        <input disabled={!isLogin} className="disable-box" placeholder="로그인이 필요한 서비스입니다." />
        <div className="disable-maxlength">500</div>
      </form>
    </div>
  );
};

export default Disable;
