import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Link to="/">
        <button>카드 UI 확인하기</button>
      </Link>
      <Link to="/text">
        <button>입력폼 UI 확인하기</button>
      </Link>
    </div>
  );
};

export default Header;
