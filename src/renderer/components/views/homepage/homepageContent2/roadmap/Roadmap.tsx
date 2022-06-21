import React from 'react';
import "./index.scss";
import RoadmapList from "./roadmapList/RoadmapList";

import { ReactComponent as Banana } from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
import banana from "../../../../../../assets/images/pictures/backgrounds/banana.png";

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <h1>Utility & Roadmap</h1>
          <p>
          Lets keep it simple. Scholaroids are the Avatars of the Scholarship Reward System (SRS).
          </p>
          <p>
          The ones that are sold as part of our NFT sale are "mature" Scholaroids.
          </p>
          <p>
          With these Scholaroids, you will have 2 options to benefit of these NFT's once the SRS is ready by linking them to your SRS account:
          </p>
          <p>
          1. Person with no previous education background: An additional Scholaroid will give them more earning power on their scholar performance.
          </p>
          <p>
          2. Person with existing educational background: that person becomes eligible to collect rewards from his completed years of studies retroactively.
          </p>
        </div>
        {/* <Banana id="banana" /> */}
        <img id="banana" src={banana} alt="logo"/>
      </div>
      <RoadmapList />
    </>
  );
}
