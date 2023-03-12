import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import NameTag from "./NameTag";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
