import React, { createContext, useState } from "react";

const TextContext = createContext({
  text: "",
  isUpperCase: false,
  handleCaseChange: () => {},
  handleOnChange: () => {},
  clear: () => {},
});

export default TextContext;
