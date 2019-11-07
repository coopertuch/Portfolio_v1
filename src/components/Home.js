import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Cooper Tuch</h1>
        <h2>Software Engineer // Ex-Media Planner</h2>
        <div className="nav">
          <a
            className="url"
            href="https://www.linkedin.com/in/coopertuch/"
            target="_blank"
          >
            [ LinkedIn ]
          </a>
          <a
            className="url"
            href="https://github.com/coopertuch"
            target="_blank"
          >
            [ GitHub ]
          </a>
          <a
            className="url"
            href="https://medium.com/@coopertuch"
            target="_blank"
          >
            [ Medium ]
          </a>
        </div>
        <div className="nav">
          <p>Introduction</p>
        </div>
      </div>
    );
  }
}

export default Home;
