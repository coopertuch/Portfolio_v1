import React, { Component } from "react";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <div className="blog">
          <a
            className="url"
            href="https://medium.com/@coopertuch/journey-to-ga-e8f0a79ad845"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>
                <p>Journey To GA </p>
              </span>
            </div>
          </a>
          <a
            className="url"
            href="https://medium.com/@coopertuch/my-first-web-application-eeaef8edf248"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>
                <p>My First Web Application </p>
              </span>
            </div>
          </a>
          <a
            className="url"
            href="https://medium.com/@coopertuch/journey-through-ga-4953a1bb25d2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>
                <p>Journey Through GA </p>
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Blog;
