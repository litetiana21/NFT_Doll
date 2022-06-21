import React from 'react';
import { useEffect, useState } from "react";
import useReduxState from "../../../../../../hooks/useReduxState";
import useScreen from "../../../../../../hooks/useScreen";

// import { ReactComponent as Welcome } from "../../../../../../../assets/images/pictures/screens/welcome.svg";
import welcome from "../../../../../../../assets/images/pictures/screens/welcome.svg";


/*eslint-disable react-hooks/exhaustive-deps */
export default function WelcomeScreen(): JSX.Element {
  const [{ loadTime }] = useReduxState((state) => state.Screen);
  const [, setScreenState] = useScreen();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, loadTime + 500);
    setTimeout(() => {
      setScreenState("PASSWORD");
    }, loadTime + 2500);
  }, []);
  // return <>{show && <Welcome style={{ width: "60%" }} />}</>;
  return <>{
    show && <img src="welcome" style={{ width: "60%" }} />}</>;
}
