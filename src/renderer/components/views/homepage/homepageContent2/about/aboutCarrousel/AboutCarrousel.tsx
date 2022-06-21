import React from 'react';
import "./index.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import ape1 from "../../../../../../../assets/images/pictures/carrousel/1.jpg";
import ape2 from "../../../../../../../assets/images/pictures/carrousel/2.jpg";
import ape3 from "../../../../../../../assets/images/pictures/carrousel/3.jpg";
import ape4 from "../../../../../../../assets/images/pictures/carrousel/4.jpg";
import ape5 from "../../../../../../../assets/images/pictures/carrousel/5.jpg";
import ape6 from "../../../../../../../assets/images/pictures/carrousel/6.jpg";
import ape7 from "../../../../../../../assets/images/pictures/carrousel/7.jpg";
import ape8 from "../../../../../../../assets/images/pictures/carrousel/8.jpg";
import ape9 from "../../../../../../../assets/images/pictures/carrousel/9.jpg";
import ape10 from "../../../../../../../assets/images/pictures/carrousel/10.jpg";
import ape11 from "../../../../../../../assets/images/pictures/carrousel/11.jpg";
import ape12 from "../../../../../../../assets/images/pictures/carrousel/12.jpg";
import ape13 from "../../../../../../../assets/images/pictures/carrousel/13.jpg";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
const apesimg = [
  ape1,
  ape2,
  ape3,
  ape4,
  ape5,
  ape6,
  ape7,
  ape8,
  ape9,
  ape10,
  ape12,
  ape13,
  ape11,
];

SwiperCore.use([Navigation, Autoplay]);
export default function AboutCarrousel(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });
  return (
    <div className="a-carrousel">
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        autoplay={true}
        loop={true}
      >
        {apesimg.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="a-carrousel-img">
              <img src={img} alt={`${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
