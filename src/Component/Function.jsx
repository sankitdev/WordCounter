import { useState } from "react";

function ButtonFunction() {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return {
    text,
    handleUpClick,
    handleDownClick,
    handleOnChange,
  };
}

export default ButtonFunction;
