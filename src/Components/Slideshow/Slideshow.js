import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import boatstuff from "../../Images/boat-stuff-with-taylor.jpg";
import boo from "../../Images/boo-is-cute.jpg";

import finerThings from "../../Images/finer-things.jpg";
import fosterBower from "../../Images/foster-bower.jpg";
import fosterKitties from "../../Images/foster-kitties.jpg";
import frydekAbstract from "../../Images/frydek-abstract.jpg";
import girlfriendLove from "../../Images/girlfriend-love.jpg";
import iBoardGame from "../../Images/i-board-game.jpg";
import iLoveTaylor from "../../Images/i-love-taylor.jpg";
import krimsonQueen from "../../Images/krimson-queen.jpg";
import mexicoSelfShot from "../../Images/mexico-self-shot.jpg";
import monstera from "../../Images/monstera-variegata.jpg";
import moreLeaves from "../../Images/more-pretty-leaves.jpg";
import leaves from "../../Images/pretty-leaves.jpg";
import purpleFlower from "../../Images/purple-flower.jpg";
import selfShot from "../../Images/self-shot.jpg";
import taylorCakes from "../../Images/taylor-cakes.jpg";
import taylorDoesCakes from "../../Images/taylor-does-cakes.jpg";
import whiteFlower from "../../Images/white-flower.jpg";
import profilePic from "../../Images/self-shot.jpg";

import "./Slideshow.scss";
const fadeImages = [
  profilePic,
  boatstuff,
  boo,
  finerThings,
  fosterBower,
  fosterKitties,
  frydekAbstract,
  girlfriendLove,
  iBoardGame,
  iLoveTaylor,
  krimsonQueen,
  mexicoSelfShot,
  monstera,
  moreLeaves,
  leaves,
  purpleFlower,
  selfShot,
  taylorCakes,
  taylorDoesCakes,
  whiteFlower,
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((each, index) => (
          <div className="each-fade">
            <div className="image-container">
              <img key={index} src={each} alt="Oops, not found" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
