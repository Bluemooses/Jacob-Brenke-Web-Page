import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.scss";

export default function Nav(props) {
  let history = useHistory();
  return (
    <div class="nav-bar">
      <span>
        <button
          className="navButton"
          onClick={() => {
            history.push("/");
          }}
        >Home</button>

        <button
          className="navButton"
          onClick={() => {
            history.push("/about");
          }}
        >
          About Me
        </button>
        <button
          className="navButton"
          onClick={() => {
            history.push("/mission");
          }}
        >
          Mission
        </button>
      </span>
    </div>
  );
}
