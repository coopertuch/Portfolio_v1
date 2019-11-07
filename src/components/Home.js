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
              Welcome to my portfolio!{" "}
              <span className="hashtag">
                #SoftwareEngineering #MediaPlanner
              </span>
            </p>
          </span>
        </div>
        <div className="nav">
          <h3 className="intro">Full-Stack Software Engineer</h3>
          <p className="body">
            My interest in Software Engineering stemmed from my interest in
            Gaming and Music. I was introduced to video games at an early age,
            starting with the Gameboy Color. I believe video games are an
            elegant combination of game theory, storyline, design, audio. Beyond
            the game itself, the communities created as a result have also had a
            major impact on my life, with some of my fondest memories revolving
            around all night gaming sessions with friends. Additionally,
            electronic music has always fascinated me. Digital audio workspaces
            allow us to view, edit, and completely transform soundwaves,
            combining them to create entire tracks. Electronic music has taken
            me around the world, through which I’ve met and grown closer to many
            of my current friends. All of these experiences have been entirely
            backed by the code facilitates both of these industries.{" "}
            <span className="hashtag">#HTML #CSS #JavaScript</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
