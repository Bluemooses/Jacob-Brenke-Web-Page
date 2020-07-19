import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div class="social-container">
      <div className="heading">
        <h4>Check Me Out</h4>
      </div>
      <a
        href="https://www.linkedin.com/in/jacob-brenke-aab554173/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/Bluemooses"
        target="_blank"
        rel="noopener noreferrer"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://twitter.com/brenkejacob"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
