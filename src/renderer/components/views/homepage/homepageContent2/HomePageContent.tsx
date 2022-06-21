import React from 'react';
import "./index.scss";
import About from "./about/About";
import RoadMap from "./roadmap/Roadmap";
import TraitRatity from "./traitRatity/TraitRatity";
import Team from "./team/Team";
import Faqs from "./faqs/Faqs";
import Divider from "./divider/Divider";
import Video from "./video/video";

export default function HomePageContent(): JSX.Element {
  return (
    <div className="hp-content">
      <About />
      <RoadMap />
      <Divider />
      <TraitRatity />
      <Divider />
      <Faqs />
      <Video />
      <Team />
    </div>
  );
}
