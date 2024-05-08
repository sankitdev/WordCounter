import ButtonFunction from "./Function";

function Form(props) {
  const { text, handleCaseChange, handleOnChange, clear, isUpperCase } =
    ButtonFunction();
  return (
    <>
      <div className="container text-center">
        <span className="bg-red-500"> Enter the Heading to analyse below </span>
        <button
          onClick={clear}
          className="py-1 px-3 mx-2 rounded border-0 my-3 "
        >
          Clear
        </button>
        <textarea
          value={text}
          onChange={handleOnChange}
          className={`form-control bg-${
            props.mode === "light" ? "light" : "dark"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          rows="8"
        ></textarea>
        <button
          onClick={handleCaseChange}
          type="button"
          className="btn btn-primary py-2 mt-2 my-3"
        >
          {isUpperCase ? "Convert to LowerCase" : "Convert to UpperCase"}
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p className="my-0">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Time required to read above -{" "}
          <b>{0.008 * text.split(" ").length} minute</b>
        </p>
        <h2>Preview the Texts Here</h2>
        <p>
          {text > "" ? text : "Write some text above to see the preview...."}
        </p>
      </div>
    </>
  );
}

export default Form;
