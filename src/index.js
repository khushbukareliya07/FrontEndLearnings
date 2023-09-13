import React from "react";
import ReactDOM from "react-dom";

const name = "KhushbU";
const number = 7;
ReactDOM.render(
  <>
    <h1>
      This is your First React Project, {name === "Khushbu" ? 5 * 10 : 0}!
    </h1>
    <h2>
      This is template literal example : my name is{" "}
      {`${name} and my number is ${number}`}
    </h2>
    <hr />
    <ul>
      <li> I am learning React</li>
      <li> I am doing Job Search. </li>
      <li>
        It's a challenging time and I love challges and I'll get over it in
        10days.
      </li>
    </ul>
  </>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
