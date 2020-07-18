import React from "react";
import { Fade } from "react-slideshow-image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import boatstuff from "../../Images/boat-stuff-with-taylor.jpg";
import boo from "../../Images/boo-is-cute.jpg";
import doingStuff from "../../Images/doing-stuff-with-taylor.jpg";
import "./Slideshow.scss";
const fadeImages = [boatstuff, boo, doingStuff];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="Oops, image not found" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="Oops, image not found" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="Oops, image not found" />
          </div>
        </div>
      </Fade>
    </div>
  );
}
