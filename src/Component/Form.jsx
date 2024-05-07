import ButtonFunction from "./Function";

function Form(prop) {
  const { text, handleUpClick, handleDownClick, handleOnChange } =
    ButtonFunction();
  return (
    <>
      <div className="container text-center">
        <span className="bg-red-500">{prop.heading} </span>
        <button className="py-1 px-3 mx-2 rounded border-0 my-3 ">Clear</button>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="floatingTextarea"
          rows="8"
        ></textarea>
        <button
          onClick={handleUpClick}
          type="button"
          className="btn btn-primary py-2 mt-2 my-3"
        >
          Convert to UpperCase
        </button>
        <button
          onClick={handleDownClick}
          type="button"
          className="btn btn-primary py-2 mt-2 mx-3 my-3"
        >
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <h5>
          {text.split(" ").length} words and {text.length} characters
        </h5>
        <h5>
          Time required to read above - {0.008 * text.split(" ").length} minute
        </h5>
        <h2>Preview the Texts Here</h2>
        <p>
          {text > "" ? text : "Write some text above to see the preview...."}
        </p>
      </div>
    </>
  );
}

export default Form;
