import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

import { TRAITS_MAP } from "../../../../../../graphql/queries";

import { useEffect, useState } from "react";
import { getName, getRarityName } from "./name";

import "./index.scss";

import { Divider } from "@material-ui/core";
import Head from "../../../../../../assets/images/pictures/traits/Head.svg";
import Mouth from "../../../../../../assets/images/pictures/traits/Mouth.svg";
import BackGround from "../../../../../../assets/images/pictures/traits/Background.svg";
import Teeth from "../../../../../../assets/images/pictures/traits/Teeth.svg";
import Clothing from "../../../../../../assets/images/pictures/traits/Body.svg";
import Eyewear from "../../../../../../assets/images/pictures/traits/Glasses.svg";

const FILTER_MAP: any = {
  "face": Head,
  "cloths": Clothing,
  "hairs": Mouth,
  "weapons": Teeth,
  "pets": Eyewear,
  "background": BackGround,
}

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);
interface IBodyFilter {
  filter: string;
  rarities: string;
}

export default function RarityCarousel({
  filter,
  rarities,
}: IBodyFilter): JSX.Element {
  const [imageArray, setImageArray] = useState<string[] | undefined>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [Logo, setLogo] = useState<string>("");

  useEffect(() => {
    console.log(filter);
    const trait = TRAITS_MAP[filter.toLowerCase()];
    const selectedRarity = rarities.replace(' ', '').toLowerCase();
    setImageArray(selectedRarity === 'all' ? Object.values(trait).flat() : trait[selectedRarity]);
    setLogo(FILTER_MAP[filter.toLowerCase()]);
  }, [filter, rarities]);

  if (imageArray!.length === 0) {
    return (
      <Swiper
        effect={"coverflow"}
        navigation={true}
        speed={1000}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
        breakpoints={{
          "360": {
            slidesPerView: 1,
          },
          "1024": {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ width: "100%" }}>No Images to show..</h2>
            <h2 style={{ width: "100%" }}>please choose another filter </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  } else {
    return (
      <Swiper
        slidesPerView={3}
        navigation={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        speed={500}
        initialSlide={0}
        watchOverflow={false}
        centeredSlides={true}
        onSlideChange={(i) => {
          setActiveIndex(i.activeIndex);
        }}
        className="mySwiper"
        breakpoints={{
          "360": {
            slidesPerView: 1,
          },
          "600": {
            slidesPerView: 1,
          },
          "980": {
            slidesPerView: 3,
            initialSlide: 0,
          },
        }}
      >
        {imageArray!.map((value, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <img
                  src={`${value}`}
                  alt="RarityImage"
                />
              </SwiperSlide>
            </>
          );
        })}
        <div
          className={`label-wrapper ${
            rarities === "All"
              ? getRarityName(imageArray![activeIndex]).toString()
              : rarities === "Super Rare"
              ? "super-rare"
              : rarities.toLowerCase()
          }-border`}
        >
          <div
            className={`inner-wrapper ${
              rarities === "All"
                ? getRarityName(imageArray![activeIndex]).toString()
                : rarities === "Super Rare"
                ? "super-rare"
                : rarities.toLowerCase()
            }`}
          >
            {activeIndex < imageArray!.length! ? (
              <span className="left-label">
                <p id="top-label" style={{ textAlign: "left" }}>
                  {getName(imageArray![activeIndex])}
                </p>
                <p id="bottom-line">Rarity %: TBD</p>
              </span>
            ) : (
              <span className="left-label">
                <p id="top-label" style={{ textAlign: "left" }}>
                  {getName(imageArray![0])}
                </p>
                <p id="bottom-line">Rarity %: TBD</p>
              </span>
            )}
            <Divider
              style={{ backgroundColor: "white" }}
              orientation="vertical"
              flexItem
            />
            <span className="right-label">
              <span>
                <p id="top-label" style={{ margin: 0, textAlign: "right" }}>
                  {filter.toLocaleUpperCase()}
                </p>
                <p style={{ textAlign: "right" }} id="bottom-line">
                  {rarities === "All"
                    ? getName(
                        getRarityName(imageArray![activeIndex]).toString()
                      )
                    : rarities.toUpperCase()}
                </p>
              </span>
              <img src={Logo} id="logo-trait" alt="" />
            </span>
          </div>
        </div>
      </Swiper>
    );
  }
}
