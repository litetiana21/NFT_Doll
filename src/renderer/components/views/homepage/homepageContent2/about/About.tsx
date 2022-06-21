import React from 'react';
import "./index.scss";

import AboutCarrousel from "./aboutCarrousel/AboutCarrousel";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as Ape } from "../../../../../../assets/images/pictures/backgrounds/ape-headmaster2.svg";
import { ReactComponent as Cap } from "../../../../../../assets/images/pictures/icons/Cap2.svg";

// import ape from "../../../../../../assets/images/pictures/backgrounds/ape-headmaster2.svg";
// import cap from "../../../../../../assets/images/pictures/icons/Cap2.svg";
import boxLight from "../../../../../../assets/images/pictures/backgrounds/box-light.png";

export default function About(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <>
      <div id="about" className="hp-about" data-aos="fade-up">
        <img src={boxLight} alt="boxLight"/>
        {/* {isMobile ? <Cap /> : <Ape />} */}
        {
          // isMobile ? <img src={cap} alt="logo"/> : <img src={ape} alt="logo"/>
        }
        <div className="hp-a-content">
          <h1>Welcome to the Scholarship Coin NFT minting Event!</h1>
          <p>
          As part of the future of the World Scholarship Foundation, Scholaroid NFT’s will play an important role within the Scholarship Reward System (SRS) as evolving Avatars for each registered student. As the SRS is still being developed, we are releasing a batch of rare Scholaroid NFT’s to the public which include unique pieces of artwork. More specifically, 1 exclusive artwork, 22 Elite artwork and 20 000 Scholaroid Avatars (All unique).
          </p>
          <p>
          This batch of Scholaroids have been given the name The Resistance of Freedom & Peace in light of current events in Ukraine. They represent people of strong will.
          Each minted Scholaroid are custom and come with various features such as hats, hairstyle, clothe, weapon and background. All are different.
          </p>
          <p>
          When Minting you will randomly obtain an NFT<br></br>
          Your chances of obtaining the:<br></br>
          Exclusive Artwork is 0.005% (1:20023)<br></br>
          Elite Artwork is 0.11% (22:20023)<br></br>
          Scholaroid is 99.88% (20000:20023)
          </p>
          <h1>MINTING FEE: 0.5 BNB</h1>
          <p>Maximum student number: 20,023</p>
        </div>
      </div>
      <AboutCarrousel />
    </>
  );
}
