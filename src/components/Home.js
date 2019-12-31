import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          <a
            className="url"
            href="https://www.linkedin.com/in/coopertuch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          //{" "}
          <a
            className="url"
            href="https://github.com/coopertuch"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          //{" "}
          <a
            className="url"
            href="https://medium.com/@coopertuch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </h2>
      </div>
    );
  }
}

export default Home;
