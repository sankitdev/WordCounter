import { React, useState } from "react";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";
import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState("light"); //Dark Mode to Light Mode Toggle Button
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been switched", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been switched", "success");
    }
  };

  const handleDismiss = () => {
    setAlert(null); // Manual dismissal
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} handleDismiss={handleDismiss} />
      <div className="container">
        <Form mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
