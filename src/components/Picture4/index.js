import React, { useCallback } from "react";
import logo from "sampleDatas/img/logo.png";
import "./style.css";

const Picture4 = ({ data }) => {
  const sliceContent = useCallback((content) => {
    if (content.length > 60) {
      return content.slice(0, 58) + "...";
    }
    return content;
  }, []);

  return (
    <div className="picture-container-row">
      <div className="picture-row-left">
        <img src={logo} alt="로고이미지" />
      </div>
      <div className="picture-row-right">
        <div className="picture-row-label">{data.subTitle}</div>
        <div className="picture-row-title">{sliceContent(data.contents)}</div>
        <div className="point-boxes-row">
          <div className={data.point >= 1 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 2 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 3 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 4 ? "point-box check" : "point-box"}></div>
          <div className={data.point >= 5 ? "point-box check" : "point-box"}></div>&nbsp;
          <span> | {data.writer}</span>
        </div>
      </div>
    </div>
  );
};

export default Picture4;
