import React from "react";
import { Link } from "react-router-dom";

const InputHeader = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Link to="/text/default">
        <button>입력 폼 ui default 확인하기</button>
      </Link>
      <Link to="/text/disable">
        <button>입력 폼 ui disable 확인하기</button>
      </Link>
      <Link to="/text/readonly">
        <button>입력 폼 ui readonly 확인하기</button>
      </Link>
    </div>
  );
};

export default InputHeader;
