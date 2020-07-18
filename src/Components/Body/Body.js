import React from "react";
import "./Body.scss";
import { useHistory } from "react-router-dom";
export default function Body() {
  return (
    <div class="card">
      <h2 className="welcome">Software Engineer For Hire</h2>
      <a href="https://docs.google.com/document/d/13BZdbKvktNUin53yJc1FyE0NNxPzWhnQjRLqAUzWWhA">
        <button className="buton">See My Resume</button>
      </a>
    </div>
  );
}
