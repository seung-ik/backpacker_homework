import React from "react";
import logo from "sampleDatas/img/logo.png";
import "./style.css";

const Picture1 = () => {
  return (
    <div className="picture-container">
      <img src={logo} alt="로고이미지" />

      <div className="picture-middle">
        <div className="picture-label">Card Label</div>
        <div className="picture-title">Card Title</div>
        <div>
          <span className="hilight">Hilight</span>&nbsp;
          <span className="line-through">cross out</span>
        </div>
      </div>
      <div className="picture1-bottom">
        <div className="point-boxes">
          <div className="point-box check"></div>
          <div className="point-box check"></div>
          <div className="point-box"></div>
          <div className="point-box"></div>
          <div className="point-box"></div>
        </div>
        <span>Lorem ipsum dolor sit amet...</span>
      </div>
    </div>
  );
};

export default Picture1;
