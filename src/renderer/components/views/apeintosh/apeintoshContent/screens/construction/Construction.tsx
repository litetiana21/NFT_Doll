import React from 'react';
import "./index.scss";
import ApeintoshWindow from "../../../../../common/apeintosh/apeintoshWindow/ApeintoshWindow";

// import { ReactComponent as Cone } from "../../../../../../../assets/images/pictures/desktop icons/traffic-cone.svg";
import cone from "../../../../../../../assets/images/pictures/desktop icons/traffic-cone.svg";

export default function Construction(): JSX.Element {
  return (
    <ApeintoshWindow>
      <div className="s-construction">
        {/* <Cone /> */}
        <img src={cone} alt="cone" />
        <h1>We are in Construction pls wait...</h1>
      </div>
    </ApeintoshWindow>
  );
}
