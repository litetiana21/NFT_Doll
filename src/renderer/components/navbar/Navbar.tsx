import React from 'react';

import "./index.scss";
import HamIcon from "./hamIcon/HamIcon";
import { SwipeableDrawer } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";
import NavList from "./navList/NavList";
import { useMediaQuery } from "react-responsive";
import ConnectButton from "./connectButton/ConnectButton";
import { useHistory } from "react-router-dom";
import NavIcon from "../../../assets/images/pictures/logos/DAA_Logo-black.png";
import ScholaroidImg from "../../../assets/images/pictures/desktop icons/scholaroid.png";
import { scrollIntoViewCalc } from "../../../utils/scrollIntoView";
import { Link } from "react-router-dom";
export default function Navbar(): JSX.Element { 
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const leftNav = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 992px)",
  });

  useEffect(() => {
    const body = document.getElementsByTagName("html");
    if (menu) {
      body[0].style.overflowY = "hidden";
    } else {
      body[0].style.overflowY = "auto";
    }
    return () => {
      body[0].style.overflowY = "auto";
    };
  }, [menu]);

  return (
    <div
      className="navbar"
      id="navbar"
      // style={{
      //   backgroundColor:
      //     history.location.pathname === "/"
      //       ? "var(--dark-blue)"
      //       : "var(--darker-blue)",
      // }}
    >
      <img src={NavIcon} alt="ScholaroidImage" onClick={() => history.push("/")}
        style={isMobile ? {} : { zIndex: 2000, cursor: "pointer" }}
      />
      <div className="left-nav-main">
        <div className="left-nav" ref={leftNav}>
          <ConnectButton
            navRef={leftNav}
            className={`${menu ? "open-menu" : ""}`}
          />
          <HamIcon open={menu} onClick={() => setMenu(!menu)} />

        </div>

        <SwipeableDrawer
          anchor="right"
          open={menu}
          onOpen={() => setMenu(true)}
          onClose={() => setMenu(false)}
          className="nav-drawer"
        >
          {!isMobile && (
            <>
              <div className="logo"></div>
              <div className="monke">
                {/* <ApeMenu /> */}
                <img src={ScholaroidImg} alt="scholaroidImage" />
              </div>
            </>
          )}
          <NavList
            open={menu}
            style={isMobile ? { width: "100vw" } : { width: "40%" }}
            close={() => setMenu(false)}
          />
        </SwipeableDrawer>
      </div>
      <div className='middle-navbar'>
      <span className='about_navbar'
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("about");
          }}
        >
          About
        </span>
        <span className='roadmap_navbar'
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("roadmap");
          }}
        >
          Utility & Roadmap
        </span>
        <span className='traits_navbar'
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("traits");
          }}
        >
          Rarity
        </span>
        <span className='faqs_navbar'
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("faqs");
          }}
        >
          Faq
        </span>
        <span><Link to="/rarities" className='traits'>Scholarship Traits</Link></span>
        <span className='video_navbar'
          onClick={async () => {
            if (history.location.pathname !== "/") {
              await history.push("/");
            }
            scrollIntoViewCalc("video");
          }}
        >
          Video
        </span>
      </div>
    </div>
  );
}
