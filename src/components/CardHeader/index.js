import React from "react";
import { Link } from "react-router-dom";

const CardHeader = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Link to="/card/case1">
        <button>case1 확인하기</button>
      </Link>
      <Link to="/card/case2">
        <button>case2 확인하기</button>
      </Link>
      <Link to="/card/case3">
        <button>case3 확인하기</button>
      </Link>
      <Link to="/card/case4">
        <button>case4 확인하기</button>
      </Link>
    </div>
  );
};

export default CardHeader;
