import React from "react";
import { useHistory } from "react-router-dom";
export default function About() {
  let history = useHistory();

  return (
    <div class="card">
      <p>Creative problem solver with natural curiosity and a forever student.</p>
      <button className="buton" onClick={() => history.push("/")}>
        Home
      </button>
    </div>
  );
}
