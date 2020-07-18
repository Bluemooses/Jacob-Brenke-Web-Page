import React from "react";
import { useHistory } from "react-router-dom";

export default function Mission(props) {
  let history = useHistory();
  return (
    <div class="card">
      <p>
        To create an open and honest environment where people feel free to be
        their best selves.
      </p>
      <button className="buton" onClick={() => history.push("/")}>
        Home
      </button>
    </div>
  );
}
