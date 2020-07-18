import React from "react";
import "./Body.scss";
import Resume from "../Resume/Resume";
export default function Body() {
  return (
    <div class="card">
      <h2 className="welcome">Software Engineer For Hire</h2>
      <Resume />
    </div>
  );
}
