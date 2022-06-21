import React from 'react';
import "./index.scss";
import HomeAcordion from "../../homeAcordion/HomeAcordion";
import { useState } from "react";
export default function RoadmapList(): JSX.Element {
  const [current, setCurrent] = useState(6);

  const handleExpanding = (index: number) => {
    if (current === index) {
      setCurrent(6);
    } else {
      setCurrent(index);
    }
  };
  return (
    <div className="hp-roadmap-list">
      {/* <HomeAcordion
        header="Scholaroid Gallery"
        text="Want a way to view the entire student directory? Yeah, so do we. The first thing we will be working on after our launch is a way for you to not only see all 20,023 scholaroids, but a way of filtering them by trait; the ultimate way to stalk other scholaroids."
        expanded={current === 0}
        onChange={() => handleExpanding(0)}
      />
      <HomeAcordion
        header="Website 2.0"
        text="This is where the magic happens. The next version of our site is where we plan to focus our attention, to bring utility to our students. We will be reinvesting a chunk of our enrolment fees into a professional level user experience & user interface design. After all, the website will be the hub for our utility so we’d expect nothing less than a seamless and fun experience for our students. A couple of the bigger ticket items for the website are detailed further down."
        expanded={current === 1}
        onChange={() => handleExpanding(1)}
      />
      <HomeAcordion
        header="Charity"
        text="One of the most positive aspects that has come out of NFT projects has been the selfless donations to beautiful causes tied to the theme of that project. The Scholaroid Scholarship will be no different. However, rather than just doing a one off donation and moving on, we are looking to establish a way of building regular donations into the mechanic of the scholarship. Like others, we are planning multiple charity auction colab of 1/1 Scholaroids, but we are also looking to add things such as an ‘altruistic lottery’ to our regular operations."
        expanded={current === 2}
        onChange={() => handleExpanding(2)}
      />
      <HomeAcordion
        header="Marketplace"
        text="We are still very much in the early days of Binance Smart Chain. So much so that a ‘go-to’ marketplace for multiple NFT projects still hasn’t been established. While there are a few options that look to be good contenders, we feel as though a scholarship marketplace could provide another excellent option for the community. A chunk of our enrollment fees will be spent working with a dedicated web design/development team to create a marketplace hub that provides a seamless, hassle-free and enjoyable way of browsing, buying and listing NFT’s on Binance Smart Chain. The Marketplace will be an scholarship venture so a certain percentage of overall sales will be fed back into our community vault for future scholarship/project expansion."
        expanded={current === 3}
        onChange={() => handleExpanding(3)}
      /> */}
    </div>
  );
}
