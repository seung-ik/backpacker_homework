import React, { useState, useCallback, useRef, useEffect } from "react";
import SetLengthForm from "components/SetLengthForm";

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
      if (isNaN(Number(maxLengthInputValue))) {
        alert("숫자를 넣어주세요");
        setMaxLengthInputValue("");
        return;
      }
      setMaxLength(Number(maxLengthInputValue));
      setMaxLengthInputValue("");
    },
    [maxLengthInputValue]
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
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid black", position: "relative", width: "800px" }} onClick={focusTyping}>
          <input
            type="text"
            ref={typingInputRef}
            placeholder={initialData}
            maxLength={maxLength}
            value={typingInputValue}
            onChange={onChangeTypingInputValue}
            style={{ width: "90%", height: "70px", border: "none", marginBottom: "60px", outLine: "none" }}
          />
          <div style={{ position: "absolute", bottom: 0, right: 0 }}>{maxLength - typingInputValue.length}</div>
        </div>
        {isTyping && <button onClick={onClickSave}>SAVE</button>}
      </div>
    </>
  );
};

export default DefaultInput;
