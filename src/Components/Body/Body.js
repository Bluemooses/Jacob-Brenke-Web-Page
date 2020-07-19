import React from "react";
import "./Body.scss";
import { useHistory } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
export default function Body() {
  return (
    <div>
      <div class="card">
        <h2 className="welcome">Software Engineer For Hire</h2>

        <a
          className="resumeLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/13BZdbKvktNUin53yJc1FyE0NNxPzWhnQjRLqAUzWWhA"
        >
          <button className="buton">See My Resume</button>
        </a>
      </div>
    </div>
  );
}
