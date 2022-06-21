import React from 'react';
// import rarities from "../../../json/Rarities.json";
// import { TTRaitLevel } from "../../../../../../api/types/apeTrait";

export function getTrait(trait: string): {
  background: string;
  percentage: string;
//  level: TTRaitLevel;
  level: any;
} {
  // if (rarities.common.includes(trait)) {
  //   return {
  //     background: "#cdb19b",
  //     percentage: "8%",
  //     level: "common",
  //   };
  // }
  // if (rarities.uncommon.includes(trait)) {
  //   return {
  //     background: "#77bdeb",
  //     percentage: "5%",
  //     level: "uncommon",
  //   };
  // }
  // if (rarities.rare.includes(trait)) {
  //   return {
  //     background: "#ebc55f",
  //     percentage: "2%",
  //     level: "rare",
  //   };
  // }
  // if (rarities["super rare"].includes(trait)) {
  //   return {
  //     background: "#f17a92",
  //     percentage: "1%",
  //     level: "super rare",
  //   };
  // }
  // if (rarities.mythic.includes(trait)) {
  //   return {
  //     background: "#53e3bd",
  //     percentage: "0.5%",
  //     level: "mythic",
  //   };
  // }

  return {
    background: "#cdb19b",
    percentage: "8%",
    level: "common",
  };
}
