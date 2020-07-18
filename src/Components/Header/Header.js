import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div class="social-container">
      <title>Jacob F. Brenke</title>
      <img src="https://i.imgur.com/HlJqr41.jpg"></img>
      <h2>Jacob F. Brenke</h2>
    </div>
  );
}
