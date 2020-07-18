import React from "react";
import { useHistory } from "react-router-dom";

export default function Mission(props) {
  let history = useHistory();
  return (
    <div class="card">
      <p>
        To create an open and honest environment where people feel free to be
        themselves.
      </p>
      <button className="backButton" onClick={() => history.push("/")}>
        Home
      </button>
    </div>
  );
}
