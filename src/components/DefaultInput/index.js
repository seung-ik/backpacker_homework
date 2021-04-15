import React, { useState, useCallback, useRef, useEffect } from "react";
import SetLengthForm from "components/SetLengthForm";
import "./style.css";

const DefaultInput = () => {
  const typingInputRef = useRef();
  const [maxLength, setMaxLength] = useState(300);
  const [maxLengthInputValue, setMaxLengthInputValue] = useState("");
  const [typingInputValue, setTypingInputValue] = useState("");
  const [initialData, setInitialData] = useState("내용을 입력해주세요!!!");
  const [isTyping, setIsTyping] = useState(false);

  const onChangeMaxLengthInputValue = useCallback((e) => {
    setMaxLengthInputValue(e.target.value);
  }, []);

  const onChangeTypingInputValue = useCallback((e) => {
    setTypingInputValue(e.target.value);
  }, []);

  const onSubmitMaxLength = useCallback(
    (e) => {
      e.preventDefault();

      let maxlen = Number(maxLengthInputValue);

      if (isNaN(maxlen)) {
        alert("숫자를 넣어주세요");
        setMaxLengthInputValue("");
        return;
      }
      if (typingInputValue.length > maxlen) {
        alert("이미 제한글자를 초과하였습니다.");
        setMaxLengthInputValue("");
        return;
      }
      setMaxLength(maxlen);
      setMaxLengthInputValue("");
    },
    [maxLengthInputValue, typingInputValue]
  );

  const focusTyping = useCallback(() => {
    typingInputRef.current.focus();
  }, []);

  const onClickSave = useCallback(() => {
    setIsTyping(false);
    setInitialData(typingInputValue);
  }, [typingInputValue]);

  useEffect(() => {
    if (typingInputValue !== initialData) {
      setIsTyping(true);
    }
  }, [typingInputValue, initialData]);

  return (
    <>
      <SetLengthForm
        maxLengthInputValue={maxLengthInputValue}
        onChangeMaxLengthInputValue={onChangeMaxLengthInputValue}
        onSubmitMaxLength={onSubmitMaxLength}
      />
      <div className="input-container">
        <div className={isTyping ? "input-outterbox focus" : "input-outterbox"} onClick={focusTyping}>
          <textarea
            className="input-innerbox"
            type="text"
            ref={typingInputRef}
            placeholder={initialData}
            maxLength={maxLength}
            value={typingInputValue}
            onChange={onChangeTypingInputValue}
          />
          <div className="input-maxlength">{maxLength - typingInputValue.length}</div>
        </div>
        {isTyping && (
          <button className="save-button" onClick={onClickSave}>
            SAVE
          </button>
        )}
      </div>
    </>
  );
};

export default DefaultInput;
