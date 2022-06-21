import "./index.scss";
import { Link } from "react-router-dom";
/* import PrimaryButton from "../../common/primaryButton/primaryButton"; */
import { useTrail } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { scrollIntoViewCalc } from "../../../../utils/scrollIntoView";
import { useHistory } from "react-router"; 
/* 
import useReduxState from "../../../hooks/useReduxState"; */

import { ReactComponent as Twitter } from "../../../../assets/images/icons/twitter.svg";
import { ReactComponent as Discord } from "../../../../assets/images/icons/discord.svg";

import React from "react";

export default function NavList({
  open,
  style,
  close,
}: {
  open: boolean;
  style?: React.CSSProperties;
  close: () => void;
}): JSX.Element {
  const history = useHistory();
  const trail = useTrail(9, {
    from: { x: 500, opacity: 0 },
    x: open ? 0 : 500,
    opacity: open ? 1 : 0,
    cursor: "pointer",
    config: { mass: 6, tension: 3000, friction: 200 },
  });
  /*   const [{ connected }] = useReduxState((state) => state.globalData); */
  return (
    <div className="nav-list" style={style? style : {}} onClick={close}>
      <animated.div className="my-apes" style={trail[0]}>
        <Link
          to={"/"}
          /* to={connected ? "/my-apes" : "/"} */
          //style={connected ? { color: "white" } : { color: "#2c253e" }}
        >
          My Scholaroids
          <div>can be seen from metamask now</div>
        </Link>
      </animated.div>
      <animated.div style={trail[1]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("about");
          }}
        >
          About
        </span>
      </animated.div>
      <animated.div style={trail[2]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("roadmap");
          }}
        >
          Utility & Roadmap
        </span>
      </animated.div>
      <animated.div style={trail[3]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("traits");
          }}
        >
          Rarity
        </span>
      </animated.div>
      <animated.div style={trail[4]}>
        <Link to="/rarities">Scholarship Traits</Link>
      </animated.div>
      <animated.div style={trail[5]}>
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("faqs");
          }}
        >
          Faq
        </span>
      </animated.div>
      <animated.div style={trail[9]} className="nav-video">
        <span
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("video");
          }}
        >
          Video
        </span>
      </animated.div>
      <br />
      <animated.div className="nav-social" style={trail[6]}>
        <a
          href="https://twitter.com/degenapeacademy"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="http://discord.gg/degenapeacademy"
          target="_blank"
          rel="noreferrer"
        >
          <Discord />
        </a>
      </animated.div>
      <animated.div style={trail[7]}>
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

      <animated.div style={trail[8]}>
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

      {/*       <PrimaryButton onClick={() => console.log("hi")}>MINT</PrimaryButton> */}
    </div>
  );
}
