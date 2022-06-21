import React from 'react';
import "./index.scss";
import ApeintoshWindow from "../../../../../common/apeintosh/apeintoshWindow/ApeintoshWindow";
import ApeintoshButton from "../../../../../common/apeintosh/apeintoshButton/ApeintoshButton";
import useWallet from "../../../../../../hooks/useWallet";
import { TWallet } from "../../../../../../hooks/useWallet";
import useDidUpdateEffect from "../../../../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../../../../hooks/useReduxState";
import useScreen from "../../../../../../hooks/useScreen";
export default function ConnectScreen(): JSX.Element {
  const [wallet, setWallet] = useWallet();
  const [, setScreen] = useScreen();
  const [{ connected }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );

  useDidUpdateEffect(() => {
    if (wallet) {
      setGlobalData({
        type: "SET_GLOBAL_DATA",
        arg: {
          wallet,
        },
      });
    }
  }, [wallet]);

  useDidUpdateEffect(() => {
    setScreen("LOADING");
  }, [connected]);

  const handleWallet = (walletType: TWallet) => {
    setWallet(walletType);
  };
  return (
    <ApeintoshWindow width="80%">
      <div className="s-verify">
        <h1>Please Connect Your wallet</h1>
        <div className="button-area">
          <ApeintoshButton
            style={{ height: "100%" }}
            onClick={() => handleWallet("Phantom")}
          >
            Phantom
          </ApeintoshButton>
          <ApeintoshButton
            color="BLUE"
            style={{ height: "100%" }}
            onClick={() => handleWallet("Sollet")}
          >
            Sollet
          </ApeintoshButton>
        </div>
      </div>
    </ApeintoshWindow>
  );
}
