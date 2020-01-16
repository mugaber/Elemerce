import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";

// added Browser router to use the functionality of react-router
// for more url and routes in the application

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
