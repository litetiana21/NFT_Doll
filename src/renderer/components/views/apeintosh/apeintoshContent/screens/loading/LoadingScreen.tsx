import React from 'react';
import "./index.scss";

import ApeintoshWindow from "../../../../../common/apeintosh/apeintoshWindow/ApeintoshWindow";
import { useEffect } from "react";
import useScreen from "../../../../../../hooks/useScreen";
/*eslint-disable react-hooks/exhaustive-deps */
export default function LoadingScreen(): JSX.Element {
  const [, setScreen] = useScreen();
  useEffect(() => {
    setTimeout(() => {
      setScreen("HOME");
    }, 3500);
  }, []);
  return (
    <ApeintoshWindow>
      <div className="s-loading">
        <div className="loading-bar" />
        <h1>Loading Apeintosh</h1>
      </div>
    </ApeintoshWindow>
  );
}
