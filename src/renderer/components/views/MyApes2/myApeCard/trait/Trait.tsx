import React from 'react';
import "./index.scss";

// import { IApeAttribute } from "../../../../../api/types/apeTrait";
import { getTrait } from "./utils/helper";
import { useState } from "react";
// import { TTRaitLevel } from "../../../../../api/types/apeTrait";

export default function Trait({
  trait_type,
  value,
// }: IApeAttribute): JSX.Element {
}: any): JSX.Element {
  const [{ background, percentage, level }] = useState<{
    background: string;
    percentage: string;
//    level: TTRaitLevel;
    level: any;
  }>(getTrait(value as string));

  console.log(trait_type);
  const imgLink = `${process.env.REACT_APP_IMAGE_LINK}traits/${
    trait_type === "Fur / Skin" ? "FurSkin" : trait_type
  }.svg`;
  return (
    <div className="ma-trait" style={{ border: `1px solid ${background}`}}>
      <div
        className="ma-trait-container"
        style={{ backgroundColor: background }}
      >
        <div className="ma-trait-value">
          <p>{value}</p>
          <span>{percentage} have this trait</span>
        </div>
        <div className="ma-trait-divider"></div>
        <div className="ma-trait-type">
          <div>
            <p>{trait_type}</p>
            <span>{level}</span>
          </div>
        </div>
        <img src={imgLink} alt="" />
      </div>
    </div>
  );
}
