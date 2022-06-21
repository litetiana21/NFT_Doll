import React from 'react';
import "./index.scss";

// import Swiper core and required modules
import { useEffect, useState } from "react";
import { getName, getRarityName } from "../carousel/name";
import { TRAITS_MAP } from "../../../../../../graphql/queries";

// install Swiper modules
interface IBodyFilter {
  filter: string;
  rarities: string;
}

export default function ListView({
  filter,
  rarities,
}: IBodyFilter): JSX.Element {
  const [imageArray, setImageArray] = useState<string[] | undefined>([
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/222/200/300",
    "https://picsum.photos/id/111/200/300",
  ]);

  useEffect(() => {
    const trait = TRAITS_MAP[filter.toLowerCase()];
    const selectedRarity = rarities.replace(' ', '').toLowerCase();
    setImageArray(selectedRarity === 'all' ? Object.values(trait).flat() : trait[selectedRarity]);
  }, [filter, rarities]);

  if (imageArray!.length === 0) {
    return (
      <>
        <h1>No Images to show..</h1>
        <h1>please choose another filter </h1>
      </>
    );
  } else {
    return (
      <div className="list-wrapper">
          <h4 style={{textAlign:"left", width:"fit-content"}}>{filter.toLocaleUpperCase()} - {rarities.toLocaleUpperCase()}</h4>
        {imageArray!.map((el, index) => {
          return (
            <div
              className={`list-item ${
                rarities === "All"
                  ? getRarityName(imageArray![index]).toString()
                  : rarities === "Super Rare"
                  ? "super-rare"
                  : rarities.toLowerCase()
              }-list`}
            >
              <span>
                <p id="header">Name:</p>
                <p id="value">{getName(imageArray![index])}</p>
              </span>
              <span>
                <p id="header">Category:</p>
                <p id="value">{getName(getRarityName(imageArray![index]).toString())}</p>
              </span>
              <span>
                <p id="header">Rarity %</p>
                <p id="value">
                  {/* {getName(
                    getRarityName(imageArray![index]).toString()
                  ).toLocaleLowerCase() === "common"
                    ? "13%"
                    : getName(
                        getRarityName(imageArray![index]).toString()
                      ).toLocaleLowerCase() === "uncommon"
                    ? "4%"
                    : getName(
                        getRarityName(imageArray![index]).toString()
                      ).toLocaleLowerCase() === "rare"
                    ? "2%"
                    : getName(
                        getRarityName(imageArray![index]).toString()
                      ).toLocaleLowerCase() === "super-rare"
                    ? "0.5%"
                    : "0.1%"} */}
                    TBD
                </p>
              </span>
              
            </div>
          );
        })}
      </div>
    );
  }
}
