import React from "react";
import logo from "sampleDatas/img/logo.png";
import "./style.css";

const Picture3 = ({ data }) => {
  return (
    <div className="picture-container">
      <img src={logo} alt="로고이미지" />
      <div className="picture-middle picture3-middle">
        <div className="picture-label">{data.label}</div>
        <div className="picture-title">{data.title}</div>
        <div>
          <span className="hilight">Hilight</span>&nbsp;
          <span className="line-through">cross out</span>
        </div>
      </div>
      <div className="picture3-bottom"></div>
    </div>
  );
};

export default Picture3;
