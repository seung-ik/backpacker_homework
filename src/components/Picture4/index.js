import React from "react";
import logo from "sampleDatas/img/logo.png";
import "./style.css";

const Picture4 = () => {
  return (
    <div className="picture-container-row">
      <div className="picture-row-left">
        <img src={logo} alt="로고이미지" />
      </div>
      <div className="picture-row-right">
        <div className="picture-label">Lorem ipsum dolor sit amet...</div>
        <div className="picture-title">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
        <div className="point-boxes row">
          <div className="point-box check"></div>
          <div className="point-box check"></div>
          <div className="point-box"></div>
          <div className="point-box"></div>
          <div className="point-box"></div>&nbsp;
          <span> | Seung Ik</span>
        </div>
      </div>
    </div>
  );
};

export default Picture4;
