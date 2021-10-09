import React, { useState } from "react";

export default function Textform(props) {
  const handleUPClick = () => {
    console.log("upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const concatlowup = () => {
    let newText = text.toLowerCase() + text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
  };
  const copy = () => {
    let text = document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("enter the text");
  //   setText("hello world");

  return (
    <>
      <div>
        <div className="container my-3 ">
          <div classname="mb-3 justify-content-100">
            <div className="headings">
              {" "}
              <h1>{props.heading}</h1>
            </div>

            <textarea
              name="text"
              id="mytext"
              value={text}
              onChange={handleOnChange}
              rows="10"
              columns="300000"
              class="form-control w-75"
            ></textarea>

          </div>
          <div className="buttons mx-3">
            <button className="btn btn-danger mx-1 my-2" onClick={handleUPClick}>
              convert to uppercase
            </button>
            <button className="btn btn-danger mx-1 my-2" onClick={handleLoClick}>
              convert to lowercase
            </button>
            <button className="btn btn-danger mx-1 my-2" onClick={concatlowup}>
              concate lower and uppercase
            </button>
            <button className="btn btn-danger mx-2 my-2" onClick={clear}>
              clear
            </button>
            <button className="btn btn-warning d-flex align-button-right mx-3 my-5  " onClick={copy}>
              copy text
            </button>
          </div>
        </div>
      </div>
      <div class="summary d-flex-rows ">
        <h2>YOUR TEXT SUMMARY</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>preview</h2>
        <p>{text.length>0 ?text:"enter text to preview here"}</p>
      </div>
    </>
  );
}
  