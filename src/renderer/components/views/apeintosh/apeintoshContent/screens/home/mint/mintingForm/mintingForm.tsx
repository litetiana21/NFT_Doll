import React, { useState, useEffect, useMemo } from "react";
import "./index.scss";

import { Link } from "react-router-dom";
/* import PrimaryButton from "../../common/primaryButton/primaryButton"; */
import { useTrail } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { scrollIntoViewCalc } from "../../../../../../../../../utils/scrollIntoView";
import { useHistory } from "react-router";

import { useMetamask } from "use-metamask";
import ApeintoshButton from "../../../../../../../common/apeintosh/apeintoshButton/ApeintoshButton";
import useMintingState from "../../../../../../../../hooks/useMintingState";
import Countdown from "./countdown/countdown";

import {
  mint,
  notify,
  getRemainAmount,
  getPrice,
} from "../../../../../../../../../utils/mint/mintScholaroid";

export default function MintingForm(): JSX.Element {
  const [mintingState] = useMintingState();
  const [confirm, setConfirm] = useState(false);
  const [mintCount, setMintCount] = useState("1");
  const [nftPrice, setNftPrice] = useState("0.1");
  const [remainNFTAmount, setRemainTokenAmount] = useState(20023);
  const [remainTime, setRemainTime] = useState(8640);
  const [show, setShow] = useState<boolean>(false);

  const { metaState } = useMetamask();
  console.log("CGI account in mintingForm", metaState.account[0]);

  const history = useHistory();
  const trail = useTrail(9, {
    from: { x: 500, opacity: 0 },
    x: 0,
    opacity: 1,
    cursor: "pointer",
    config: { mass: 6, tension: 3000, friction: 200 },
  });

  useMemo(async () => {
    if (mintingState === "NONE") {
      setConfirm(false);
      const price = await getPrice();
      setNftPrice(price);
      const remainAmount = await getRemainAmount();
      setRemainTokenAmount(remainAmount);
    }
  }, [mintingState]);

  const handleTime = (value: any) => {
    if (value < 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      {show ? (
        <>
          <h1>
            {!confirm
              ? "Set the number of Scholaroids to mint"
              : "Are you sure?"}
          </h1>
          {!confirm && (
            <input
              className="minting-countdown"
              value={mintCount}
              onChange={(e) => setMintCount(e.target.value)}
            />
          )}
          {!confirm && metaState.account[0] != undefined && (
            <span>{20023 - remainNFTAmount} Left</span>
          )}
          <ApeintoshButton
            color="BLUE"
            className="minting-button"
            onClick={() => {
              if (metaState.account[0] == undefined) {
                notify("warning", "Disconnected to metamask. Please connect!");
                return;
              }
              if (confirm) {
                mint(metaState.account[0], parseInt(mintCount), 0.08);
                // setConfirm(false);
              } else {
                setConfirm(true);
                // alert("setConfirm");
              }
            }}
          >
            {confirm ? "Yes" : "Mint"}
          </ApeintoshButton>
          {confirm && (
            <ApeintoshButton
              className="minting-button"
              color="BLUE"
              style={{ marginTop: "1%" }}
              onClick={() => {
                setConfirm(false);
              }}
            >
              No
            </ApeintoshButton>
          )}
          <span>Minting Fee: {nftPrice} BNB</span>
        </>
      ) : (
        <Countdown onChange={handleTime} />
      )}

      <div style={{display: 'none'}}>
        <Countdown onChange={handleTime} />
      </div>

      <div className="div-mint-description">
        <p>When Minting you will randomly obtain an NFT</p>
        <p>SCHOLAROID MINTING</p>
        <p>WONDERING ABOUT UTILITY?</p>
        <p>
          <animated.div style={trail[2]}>
            <span
              className="link-read-here"
              onClick={async () => {
                if (history.location.pathname !== "/") {
                  await history.push("/");
                }
                scrollIntoViewCalc("roadmap");
              }}
            >
              READ HERE
            </span>
          </animated.div>
        </p>
        {/* <p>
          Your chances of obtaining the:
        </p>
        <p>
          Exclusive Artwork is 0.005% (1:20023)
        </p>
        <p>
          Elite Artwork is 0.11% (22:20023)
        </p>
        <p>
          Scholaroid is 99.88% (20000:20023)
        </p> */}
      </div>
    </>
  );
}
