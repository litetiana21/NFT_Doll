import React from 'react'

import "./index.scss";
import CrayonEater from "./screens/crayon-eater/CrayonEater";
import useReduxState from "../../../../hooks/useReduxState";
import { useSpring, animated } from "@react-spring/web";
import WelcomeScreen from "./screens/welcome/WelcomeScreen";
import PasswordScreen from "./screens/password/PasswordScreen";
import LoadingScreen from "./screens/loading/LoadingScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ConnectScreen from "./screens/connect/ConnectScreen";
import Construction from "./screens/construction/Construction";
import SnakeGame from "./screens/snake-game/SnakeGame";

export default function ApeintoshContent({
  style,
}: {
  style: React.CSSProperties;
}): JSX.Element {
  const [{ screen }] = useReduxState((state) => state.Screen);
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

  console.log(screen);

  return (
    <animated.div
      className="apeintosh-content"
      style={{ ...style, ...animation }}
    >
      {(() => {
        switch (screen) {
          case "CRAYON":
            return <HomeScreen />;
            // return <PasswordScreen />;
            // return <CrayonEater />

          case "WELCOME":
            return <WelcomeScreen />;

          case "PASSWORD":
            return <PasswordScreen />;

          case "LOADING":
            return <LoadingScreen />;

          case "HOME":
            return <HomeScreen />;

          case "CONNECT":
            return <ConnectScreen />;
          case "GAMES":
            return <SnakeGame />;
          case "DEFAULT":
            return <Construction />;
        }
      })()}
    </animated.div>
  );
}
