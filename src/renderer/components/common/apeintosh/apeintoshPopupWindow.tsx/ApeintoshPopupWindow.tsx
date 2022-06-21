import React from 'react';
import "./index.scss";
import ApeintoshWindow from "../apeintoshWindow/ApeintoshWindow";
import { ReactNode, useState } from "react";
import useDidUpdateEffect from "../../../../hooks/useDidUpdateEffect";

export default function ApeintoshPopupWindow({
  children,
  width,
  open,
  ape,
}: {
  children: ReactNode;
  width?: string;
  open: boolean;
  ape?: boolean;
}): JSX.Element {
  const [popupState, setPopuState] = useState<string>("opened-window");
  useDidUpdateEffect(() => {
    // if (open) {
      setPopuState("opened-window");
    // } else {
    //   setPopuState("closed-window closed-window-animation");
    // }
  }, [open]);
  return (
    <div
      className={`a-popup-window  ${popupState}`}
      style={width ? { width } : {}}
    >
      <ApeintoshWindow width="100%" ape={ape? ape : false}>
        {children}
      </ApeintoshWindow>
    </div>
  );
}
