import React from 'react';
import { ReactNode } from "react";
import "./index.scss";
import { ReactComponent as Window } from "../../../../../assets/images/pictures/screens/empty-window-h.svg";
import ScholaroidImg  from "../../../../../assets/images/pictures/desktop icons/scholaroid.png";

import { useSpring, animated } from "@react-spring/web";

export default function ApeintoshWindow({
  children,
  width,
  ape,
}: {
  children: ReactNode;
  width?: string;
  ape?: boolean;
}): JSX.Element {
  const animation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div style={{ ...animation }} className="apeintosh-window">
      {/* <Window className="apeintosh-window-bg" style={width ? { width } : { width: "60%" }} /> */}
      {/* {ape && <img src={ScholaroidImg} alt="scholaroidImage" className="apeintosh-window-scholaroid" />} */}
      <div
        className="apeintosh-window-content"
        style={width ? { width } : { width: "60%" }}
      >
        {children}
      </div>
    </animated.div>
  );
}
