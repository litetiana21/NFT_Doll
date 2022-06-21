import React from 'react';
import "./index.scss";
import ApeintoshWindow from "../../../../../common/apeintosh/apeintoshWindow/ApeintoshWindow";
import { useState, useEffect } from "react";
import useScreen from "../../../../../../hooks/useScreen";
import useReduxState from "../../../../../../hooks/useReduxState";
/*eslint-disable react-hooks/exhaustive-deps */
export default function PasswordScreen(): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [{wallet }] = useReduxState(
    (state) => state.globalData
  );
  const [, setScreen] = useScreen();
  useEffect(() => {
    if (password === "degen69") {
      if(wallet && wallet!.publicKey){
        setScreen('LOADING')
      }else{
        setScreen("CONNECT");
      }
      
    }
  }, [password]);
  return (
    <ApeintoshWindow>
      <div className="s-password">
        <h1>Password:</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
    </ApeintoshWindow>
  );
}
