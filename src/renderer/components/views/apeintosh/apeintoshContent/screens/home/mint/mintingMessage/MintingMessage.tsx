import React from 'react';
import "./index.scss";
import useMintingState from "../../../../../../../../hooks/useMintingState";
import MintMSGLoader from "./mintLoader/MintMSGLoader";
import { getMessage } from "./util/helper";
import ApeintoshButton from "../../../../../../../common/apeintosh/apeintoshButton/ApeintoshButton";
export default function MintingMesagge() {
  const [mintingState, setMintingState] = useMintingState();

  return (
    <div className="minting-msg">
      <h1>{getMessage(mintingState)}</h1>
      <p>Please don't turn off the device</p>
      {(mintingState === "COMPLETED" || mintingState === "NO_APES" || mintingState === "FAILED") ? (
        <ApeintoshButton
          className="mm-btn"
          onClick={() => setMintingState("NONE")}
        >
          Go Back
        </ApeintoshButton>
      ) : (
        <MintMSGLoader />
      )}
    </div>
  );
}
