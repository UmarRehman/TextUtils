import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : props.mode === "green"
              ? "white"
              : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#13466e"
                  : props.mode === "green"
                  ? "red"
                  : "white",
              color:
                props.mode === "dark"
                  ? "white"
                  : props.mode === "green"
                  ? "white"
                  : "black",
            }}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary"
          style={{
            backgroundColor: props.mode === "green" ? "red" : "blue",
          }}
        >
          {" "}
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowClick}
          className="btn btn-primary ms-2 my-1"
          style={{
            backgroundColor: props.mode === "green" ? "red" : "blue",
          }}
        >
          {" "}
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-primary ms-2 my-1"
          style={{
            backgroundColor: props.mode === "green" ? "red" : "blue",
          }}
        >
          {" "}
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : props.mode === "green"
              ? "white"
              : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <h3>
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          minutes read{" "}
        </h3>
        <p>Preview</p>
        <p>{text.length > 0 ? text : "Preview your text here"}</p>
      </div>
    </>
  );
}
