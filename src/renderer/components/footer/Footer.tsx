import React from 'react';
import "./index.scss";
import ApeLogo from "../../../assets/images/pictures/logos/DAA_Logo-green.png";
import { ReactComponent as Discord } from "../../../assets/images/icons/discord.svg";
import { ReactComponent as Twitter } from "../../../assets/images/icons/twitter.svg";
import { animated } from "@react-spring/web";
import { useTrail } from "@react-spring/core";
import { useHistory } from "react-router";

export default function Footer(): JSX.Element {
  const history = useHistory();
  const trail = useTrail(2, {
    from: { x: 0, opacity: 0 },
    x: 0,
    opacity: 1,
    cursor: "pointer",
    config: { mass: 6, tension: 3000, friction: 200 },
  });
  return (
    <footer>
      <div className="foot-ape-logo">
      <img src={ApeLogo} alt="ScholaroidImage"/>
        From the smooth brains of World Scholarship Foundation Labs
        <br />
        All Rights Reserved 2022
        <animated.div style={trail[0]}>
        <span
          className="nl-terms"
          style={{
            color: "white",
            fontStyle: "italic",
            fontFamily: "Arial, Helvetica, sans-serif",
            textDecoration: "underline",
          }}
          onClick={() => {
            history.push("/terms");
          }}
        >
          Terms & Conditions
        </span>
      </animated.div>

      <animated.div style={trail[0]}>
        <span
          className="nl-privacy"
          style={{
            color: "white",
            fontStyle: "italic",
            fontFamily: "Arial, Helvetica, sans-serif",
            textDecoration: "underline",
          }}
          onClick={() => {
            history.push("/privacy");
          }}
        >
          Privacy
        </span>
      </animated.div>
        
      </div>
      <div className="foot-links">
        <Discord
          style={{cursor:"pointer"}}
          onClick={() => {
            window.open("https://discord.gg/b5RMK23hwk", "_blank");
          }}
        />
        <Twitter 
          onClick={() => {
            window.open("https://twitter.com/CoinScholarship", "_blank");
          }}
          style={{cursor:"pointer", marginLeft: "15px" }}
        />
      </div>
    </footer>
  );
}
