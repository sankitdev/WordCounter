import { React, useState } from "react";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Form mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
