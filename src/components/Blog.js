import React, { Component } from "react";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <div className="blog">
          <div>
            <span>
              <p>
                <a
                  className="url"
                  href="https://medium.com/@coopertuch/journey-to-ga-e8f0a79ad845"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Journey To GA]
                </a>{" "}
                {/* My Journey from Digital Marketing and Media Planning to Software
                Engineering With General Assembly. */}
              </p>
            </span>
          </div>
          <div>
            <span>
              <p>
                <a
                  className="url"
                  href="https://medium.com/@coopertuch/my-first-web-application-eeaef8edf248"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [My First Web Application]
                </a>{" "}
                {/* Coop's Questions - Good questions just skim the surface. Great
                questions drive meaningful connection. */}
              </p>
            </span>
          </div>
          <div>
            <span>
              <p>
                <a
                  className="url"
                  href="https://medium.com/@coopertuch/journey-through-ga-4953a1bb25d2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Journey Through GA]
                </a>{" "}
                {/* My Journey through General Assembly to become a Full Stack Web
                Developer. */}
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
