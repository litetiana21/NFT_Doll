import React from 'react';
import "./index.scss";
import { ReactNode } from "react";

type TApeintoshButtonColor = "PURPLE" | "BLUE";

interface IApeintoshButton {
  children: ReactNode;
  color?: TApeintoshButtonColor;
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}

export default function ApeintoshButton({
  children,
  color,
  className,
  style,
  onClick,
}: IApeintoshButton): JSX.Element {
  let buttonColor: TApeintoshButtonColor = "PURPLE";

  if (color) {
    buttonColor = color;
   }

  return (
    <button
      className={`apeintosh-button ${
        buttonColor !== "PURPLE" ? "btn-purple" : "btn-blue"
      } ${className? className : ""}`}
      style={style? style : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
