import React from 'react';
import "./index.scss";
export default function HamIcon({
  onClick,
  color,
  open,
}: {
  onClick: () => void;
  color?: string;
  open: boolean;
}): JSX.Element {
  return (
    <div
      id="ham-icon"
      style={{ ["--ham-color" as any]: color ? color : "white" }}
      onClick={() => onClick()}
      className={open ? "open" : ""}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
