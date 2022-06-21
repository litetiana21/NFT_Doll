import React from 'react';
import { useEffect, useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import "./index.scss";

import RarityView from "./RarityView";
import { useMediaQuery } from "react-responsive";
export default function Rarity(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const [bodyFilter, setBodyFilter] = useState({
    filter: "Face",
    rarities: "All",
  });
  const [listView] = useState(false);
  const [firstDropdown, setfirstDropdown] = useState(false);
  const [secondDropdown, setsecondDropdown] = useState(false);
  const handleRarity = (value: string) => {
    setBodyFilter({
      ...bodyFilter,
      rarities: value,
    });
  };
  const handlefirstDropdown = (value: string) => {
    setfirstDropdown(false);
    setBodyFilter({
      ...bodyFilter,
      filter: value,
    });
  };
  useEffect(() => {
    const navBar = document.getElementById("navbar");
    navBar!.style.background = "transparent";
    return () => {
      navBar!.style.background = "#1d0c47";
    };
  }, []);
  return (
    <div className="rarity-page-wrapper">
      <span className="page-header">
        <span id="line" />
        <h1>
          <p>Scholarship</p> Traits
        </h1>
        <span id="line" />
      </span>
      <div className="filter">
        {/* <div className="view-option">
          <span className="option-item" onClick={() => setListView(true)}>
            <div className={listView ? "activeRadio" : "radio"} />
            <p>List View</p>
          </span>
          <span className="option-item" onClick={() => setListView(false)}>
            <div className={!listView ? "activeRadio" : "radio"} />
            <p>Image View</p>
          </span>
        </div> */}
        <div>
          <div className="dropdown-wrapper">
            <div
              onClick={() => setfirstDropdown(!firstDropdown)}
              className="dropdown-selector"
            >
              <span>
                {bodyFilter.filter === "BackGround"
                  ? "Background"
                  : bodyFilter.filter}
              </span>
              <span>
                {" "}
                <ArrowDropDownCircleOutlinedIcon
                  className="dropDownLogo"
                  style={{ color: "aquamarine" }}
                />
              </span>
              <div
                className={`${
                  !firstDropdown
                    ? "dropdown-selections-inactive"
                    : "dropdown-selections"
                }`}
              >
                <p onClick={() => handlefirstDropdown("Face")}>Face</p>
                <p onClick={() => handlefirstDropdown("Cloths")}>Cloths</p>
                <p onClick={() => handlefirstDropdown("Hairs")}>Hairs</p>
                <p onClick={() => handlefirstDropdown("Weapons")}>Weapons</p>
                <p onClick={() => handlefirstDropdown("Pets")}>Pets</p>
                <p onClick={() => handlefirstDropdown("BackGround")}>
                  Background
                </p>
              </div>
            </div>

            {isMobile && (
              <>
                <div
                  onClick={() => setsecondDropdown(!secondDropdown)}
                  className="dropdown-selector"
                >
                  <span>{bodyFilter.rarities}</span>
                  <span>
                    {" "}
                    <ArrowDropDownCircleOutlinedIcon
                      className="dropDownLogo"
                      style={{ color: "aquamarine" }}
                    />
                  </span>
                  <div
                    className={`${
                      !secondDropdown
                        ? "dropdown-selections-inactive"
                        : "dropdown-selections"
                    }`}
                  >
                    <p onClick={() => handleRarity("All")}>All</p>
                    <p onClick={() => handleRarity("Common")}>Common</p>
                    <p onClick={() => handleRarity("UnCommon")}>Uncommon</p>
                    <p onClick={() => handleRarity("Rare")}>Rare</p>
                    <p onClick={() => handleRarity("Super Rare")}>Super Rare</p>
                    <p onClick={() => handleRarity("Mythic")}>Mythic</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {!isMobile && (
          <div className="rarities-selection">
            <span onClick={() => handleRarity("All")} className="rarity">
              <div
                className={
                  bodyFilter.rarities === "All"
                    ? "rarity-selector-active"
                    : "rarity-selector"
                }
              />
              <label>All</label>
            </span>
            <span onClick={() => handleRarity("Common")} className="rarity">
              <div
                className={
                  bodyFilter.rarities === "Common"
                    ? "rarity-selector-active"
                    : "rarity-selector"
                }
              />
              <label>Common</label>
            </span>
            <span onClick={() => handleRarity("UnCommon")} className="rarity">
              <div
                className={
                  bodyFilter.rarities === "UnCommon"
                    ? "rarity-selector-active"
                    : "rarity-selector"
                }
              />
              <label>Uncommon</label>
            </span>
            <span onClick={() => handleRarity("Rare")} className="rarity">
              <div
                className={
                  bodyFilter.rarities === "Rare"
                    ? "rarity-selector-active"
                    : "rarity-selector"
                }
              />
              <label>Rare</label>
            </span>
            <span onClick={() => handleRarity("Super Rare")} className="rarity">
              <div
                className={
                  bodyFilter.rarities === "Super Rare"
                    ? "rarity-selector-active"
                    : "rarity-selector"
                }
              />
              <label>Super Rare</label>
            </span>
            <span onClick={() => handleRarity("Mythic")} className="rarity">
              <div
                className={
                  bodyFilter.rarities === "Mythic"
                    ? "rarity-selector-active"
                    : "rarity-selector"
                }
              />
              <label>Mythic</label>
            </span>
          </div>
        )}
      </div>
      <div className="carousel">
        <RarityView
          filter={bodyFilter.filter}
          rarities={bodyFilter.rarities}
          listView={listView}
        />
      </div>
    </div>
  );
}
