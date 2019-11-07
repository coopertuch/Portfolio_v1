import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Cooper Tuch</h1>
        <h2>
          <a
            className="url"
            href="https://www.linkedin.com/in/coopertuch/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          //{" "}
          <a
            className="url"
            href="https://github.com/coopertuch"
            target="_blank"
          >
            GitHub
          </a>{" "}
          //{" "}
          <a
            className="url"
            href="https://medium.com/@coopertuch"
            target="_blank"
          >
            Medium
          </a>
        </h2>
        <div className="nav">
          <span>
            <h3 className="intro">Introduction</h3>
            <p className="body">
              Welcome to my portfolio! I'm a California State University,
              Fullerton graduate with a degree in Business & Marketing, Ex-Media
              Planner, and recent grad from General Assembly's Software
              Engineering Immersive Program. I'm passionate about Code, Music,
              and Design, seeking a full-time position in Software Engineering.
              I encourage you to take a look around - You'll find examples of my
              projects, blog posts detailing my story, and links to some of my
              favorite playlists. Please contact me directly on{" "}
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/coopertuch/"
                target="_blank"
              >
                LinkedIn!{" "}
              </a>
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
