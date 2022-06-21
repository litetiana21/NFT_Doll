import React from 'react';
import "./index.scss";
import PrimaryButton from "../../common/primaryButton/primaryButton";
import { useState, useEffect } from "react";
import WalletList from "./walletList/WalletList";
import useReduxState from "../../../hooks/useReduxState";
/* eslint-disable  react-hooks/exhaustive-deps */

import { useMetamask } from "use-metamask";

declare var window: any;

export default function ConnectButton({
  className,
  navRef,
}: {
  className: string;
  navRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const state = useState(false);
  const [{ connected, wallet }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );
  const initialMetamaskState = window.ethereum == null ? null : window.ethereum._state;
  const [metamaskState] = useState(initialMetamaskState);

  const { metaState } = useMetamask();
  setGlobalData({
    type: "SET_GLOBAL_DATA",
    arg: {
      wallet,
    },
  });

  useEffect(() => {
    if (metaState.isConnected && open) {
      // setOpen(false);
      setOpen(true);
    }
  }, [connected]);

  return (
    <div
      className={`nav-connect-wrap nav-connect  ${className} ${
        !metaState.isConnected && open ? "nc-open" : ""
      }`}
    >
      <PrimaryButton
        onClick={() => {
          if( window.ethereum != null && !metamaskState.isUnlocked ){
            window.ethereum.enable();
          }
          if (!metaState.isConnected) {
            console.log("CGI metaState ", metaState);
            setOpen(!open);
          } else if (wallet && wallet!.publicKey) {
            navigator.clipboard.writeText(wallet!.publicKey.toBase58());
            console.log("CGI wallet", wallet);
            setGlobalData({
              type: "SET_GLOBAL_DATA",
              arg: {
                wallet,
              },
            });
          }
        }}
      >
        { metaState.isAvailable && metaState.isConnected || (metamaskState?.isUnlocked)
          ? `${metaState.account[0]}`.toString().substring(2, 9) + '...' + `${metaState.account[0]}`.toString().substring(`${metaState.account[0]}`.toString().length - 6)
          : "Connect Wallet"}
      </PrimaryButton>
      <div className={`nc-dropdown `}>
        <WalletList />
      </div>
    </div>
  );
}
