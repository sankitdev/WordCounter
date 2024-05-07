import React from "react";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Form heading="Enter the Heading to analyse below" />
      </div>
    </>
  );
}

export default App;
