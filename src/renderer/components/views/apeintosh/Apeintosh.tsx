import React from 'react';
import "./index.scss";
import ApeintoshContent from "./apeintoshContent/ApeintoshContent";
import { useRef, useState, useEffect } from "react";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";
import ApesRemaining from "./apesRemaining/ApesRemaining";
/*eslint-disable react-hooks/exhaustive-deps */

import ScholaroidImg from "../../../../assets/images/pictures/desktop icons/scholaroid.png";
import ScholaroidImg1 from "../../../../assets/images/pictures/desktop icons/scholaroid1.png";
import ScholaroidImg2 from "../../../../assets/images/pictures/desktop icons/scholaroid2.png";
import exclusiveImage3 from "../../../../assets/images/pictures/desktop icons/exclusive3.png";
import exclusiveImage1 from "../../../../assets/images/pictures/desktop icons/exclusive1.png";
import exclusiveImage2 from "../../../../assets/images/pictures/desktop icons/exclusive2.png";

import { ReactComponent as ScrollWeb } from "../../../../assets/images/pictures/icons/scroll-web.svg";
import { ReactComponent as ScrollMobile } from "../../../../assets/images/pictures/icons/scroll-mobile.svg";


export default function Apeintosh(): JSX.Element {
  const apeintoshImg = useRef<HTMLImageElement>(null);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "0px",
    height: "200px",
  });

  const [{ wallet, screenLoading: loading }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );
  const handleResize = () => {
    if (apeintoshImg && apeintoshImg.current) {
      setSize({
        // height: `${apeintoshImg.current.clientHeight}px`,
        height: `524px`,
        width: `56vw`,
      });
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useDidUpdateEffect(() => {
    if (wallet) {
      wallet!.on("connect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: true,
          },
        });
      });
      wallet!.on("disconnect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: false,
          },
        });
      });

      wallet!.connect();
      return () => {
        wallet!.disconnect();
      };
    }
  }, [wallet]);

  useDidUpdateEffect(() => {
    handleResize();
  }, [loading]);

  return (
    <div
      className="apeintosh"
      style={{
        height: "87vh",
      }}
    >
      <div className="div-exclusives">
        <div className="div-container-image">
          <img src={exclusiveImage1} alt="exclusive1" className="exclusive-img side-image" />
        </div>
        <div className="div-container-image">
          <img src={exclusiveImage3} alt="exclusive1" className="exclusive-img" />
        </div>
        <div className="div-container-image">
          <img src={exclusiveImage2} alt="exclusive1" className="exclusive-img side-image" />
        </div>
      </div>
      <div className="div-scholaroids">
        <div className="div-container-image">
          <img src={ScholaroidImg} alt="scholaroidImage" className="scholaroid-img" />
        </div>
        <div className="div-container-image">
          <img src={ScholaroidImg2} alt="scholaroidImage" className="scholaroid-img" />
        </div>
        <div className="div-container-image">
          <img src={ScholaroidImg1} alt="scholaroidImage" className="scholaroid-img side-image" />
        </div>
      </div>
      <div className="apeintosh-pc" ref={apeintoshImg}>
        {!loading && (
          <ApeintoshContent
            style={{
              ["--y" as string]: `10.001%`,
              ["--x" as string]: `9.5%`,
              ["--height" as string]: `calc(${size.height})`,
              ["--width" as string]: `calc(${size.width})`,
            }}
          />
        )}
        {/* <img src={ApeintoshImg} alt="computer" className="apeintosh-img" /> */}
        {/* <div className="ape-shadow" /> */}
        {!isMobile && <ApesRemaining />}
      </div>
      {/* {isMobile ? <ScrollMobile /> : <ScrollWeb />} */}

    </div>
  );
}
