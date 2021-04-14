import React from "react";

const SetLengthForm = ({ onSubmitMaxLength, maxLengthInputValue, onChangeMaxLengthInputValue }) => {
  return (
    <form onSubmit={onSubmitMaxLength}>
      <input placeholder="최대글자수를 설정하세요" type="text" value={maxLengthInputValue} onChange={onChangeMaxLengthInputValue} />
      <button type="submit">설정</button>
    </form>
  );
};

export default SetLengthForm;
