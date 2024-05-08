import { useState } from "react";

function ButtonFunction(showAlert) {
  const [text, setText] = useState("");
  const [isUpperCase, setisUpperCase] = useState(false);

  const handleCaseChange = () => {
    setText(isUpperCase ? text.toLowerCase() : text.toUpperCase());
    setisUpperCase(!isUpperCase);
    showAlert(
      `Text converted to ${isUpperCase ? "lowercase" : "uppercase"}`,
      "info"
    );
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clear = () => {
    setText("");
    showAlert("Text cleared", "warning");
  };
  return {
    isUpperCase,
    clear,
    text,
    handleCaseChange,
    handleOnChange,
  };
}

export default ButtonFunction;
