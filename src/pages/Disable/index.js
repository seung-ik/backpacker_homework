import React, { useState, useCallback } from "react";
import "./style.css";

const Disable = () => {
  const [typingInputValue, setTypingInputValue] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const onChangeTypingInputValue = useCallback((e) => {
    setTypingInputValue(e.target.value);
  }, []);
  const changeLogin = useCallback(() => {
    setIsLogin((prev) => !prev);
  }, []);

  if (isLogin) {
    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
        <div className="input-container">
          <div className="input-outterbox">
            <textarea className="input-innerbox" type="text" placeholder="주문사항을 입력해주세요" maxLength={300} onChange={onChangeTypingInputValue} />
            <div className="input-maxlength">{300 - typingInputValue.length}</div>
          </div>
          <button className="save-button">SAVE</button>
        </div>
        <button className="userbutton" onClick={changeLogin}>
          logout
        </button>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <div className="disable-box">
        로그인이 필요한 서비스 입니다.
        <span>500</span>
      </div>
      <button className="userbutton" onClick={changeLogin}>
        login
      </button>
    </div>
  );
};

export default Disable;
