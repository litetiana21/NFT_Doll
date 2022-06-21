import "./index.scss";

import React from 'react';
import ApeintoshPopupWindow from "../../../../../../common/apeintosh/apeintoshPopupWindow.tsx/ApeintoshPopupWindow";
import useMintingState from "../../../../../../../hooks/useMintingState";
import MintingMesagge from "./mintingMessage/MintingMessage";

import MintingForm from "./mintingForm/mintingForm";

// import { faShopify } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Minting({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): JSX.Element {
  const [mintingState] = useMintingState();
  return (
    <ApeintoshPopupWindow open={open} ape={true}>
      <div className="h-minting">
        {mintingState === "NONE" ? <MintingForm /> : <MintingMesagge />}
        {/* <div className="mint-close" onClick={() => handleClose()}>
          <FontAwesomeIcon icon={faTimes} className={`mx-4`} />
        </div> */}
      </div>
    </ApeintoshPopupWindow>
  );
}
