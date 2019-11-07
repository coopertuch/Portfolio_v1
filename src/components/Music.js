import React, { Component } from "react";
import "./Music.css";

class Music extends Component {
  render() {
    return (
      <div>
        <h1>Music</h1>
        <h2>
          Cooper Tuch //{" "}
          <a
            className="url"
            href="https://open.spotify.com/user/coopertuch?si=XRC-IJBFTsuNJhz5bH9u0A"
            target="_blank"
          >
            Spotify
          </a>
        </h2>
        <div className="music">
          <iframe
            src="https://open.spotify.com/embed/playlist/16IPy7ht6hxoRYslrxtyMl"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/2ftE55WGwDbIL1n0XfmFgP"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/2M1F6UZNIbS0D3efIFQlVe"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/6DAbFSI4iEcxK1J25tz24J"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>{" "}
        </div>
      </div>
    );
  }
}

export default Music;
