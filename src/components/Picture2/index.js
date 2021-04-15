import React from "react";
import logo from "sampleDatas/img/logo.png";
import "./style.css";

const Picture2 = ({ data }) => {
  return (
    <div className="picture-container">
      <img src={logo} alt="로고이미지" />
      <div className="picture-middle">
        <div className="picture-label">{data.label}</div>
        <div className="picture-title">{data.title}</div>
        <div>
          <span className="hilight">Hilight</span>&nbsp;
          <span className="line-through">cross out</span>
        </div>
      </div>
      <div className="picture2-bottom">
        <div className="point-boxes">
          <div className={data.point >= 1 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 2 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 3 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 4 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 5 ? "point-box check" : "point-box"}></div>
        </div>
      </div>
    </div>
  );
};

export default Picture2;
