import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Music from "./components/Music";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App />
    <Projects />
    {/* <Blog />
    <Music /> */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
