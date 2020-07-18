import React from "react";
import { useHistory } from "react-router-dom";

export default function Resume() {
  let history = useHistory();
  function showMeTheMoney() {
    
    history.push('/resume')
  }

  return (
    <div>
      <button className="buton" onClick={() => showMeTheMoney()}>See My Resume</button>
    </div>
  );
}
