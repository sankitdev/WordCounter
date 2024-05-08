import { useState } from "react";

function ButtonFunction() {
  const [text, setText] = useState("");
  const [isUpperCase, setisUpperCase] = useState(false);

  const handleCaseChange = () => {
    setText(isUpperCase ? text.toLowerCase() : text.toUpperCase());
    setisUpperCase(!isUpperCase);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event);
  };

  const clear = () => {
    setText("");
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
