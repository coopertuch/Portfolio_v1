import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import { Route, Link, Switch, Redirect } from "react-router-dom";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import Blog from "./components/Blog";
// import Music from "./components/Music";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <nav>
            <div>
              <Link className="link" to="/Portfolio">
                <h1 className="title"> Cooper Tuch // Frontend Developer </h1>
              </Link>
            </div>
            <div className="links">
              <a
                className="url"
                href="https://www.linkedin.com/in/coopertuch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin-square fa-lg"></i>
              </a>
              <a
                className="url"
                href="https://github.com/coopertuch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github-square fa-lg"></i>
              </a>
              <a
                className="url"
                href="https://medium.com/@coopertuch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-medium fa-lg"></i>
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
