import React from 'react';
import "./index.scss";
import PageHeader from "../../common/pageHeader/PageHeader";
import { useEffect, useState, useRef } from "react";
// import { IApeTrait } from "../../../api/types/apeTrait";
import MyApeCard from "./myApeCard/MyApeCard";

// import test from "./json/test.json";

import { emptyApe } from "./utils/helper";
import { Modal } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import { useHistory } from "react-router";
import useReduxState from "../../../hooks/useReduxState";
export default function MyApes(): JSX.Element {
  const history = useHistory();
  const [{ wallet }] = useReduxState((state) => state.globalData);
  // const [myapes] = useState<IApeTrait[]>([
  //   test,
  //   test,
  //   test,
  //   test,
  //   test,
  //   test,
  //   test,
  // ]);

  const isbigScreen = useMediaQuery({
    query: "(min-width:768px)",
  });
  const [ModalState, setModalState] = useState(true);
  const [height /* , setHeight */] = useState("");

  const apesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("hello", wallet);
    if (wallet === null) {
      history.push("/");
    }
    const navBar = document.getElementById("navbar");
    navBar!.style.background = "transparent";
    /*     setTimeout(() => {
      if (apesContainerRef && apesContainerRef.current) {
        setHeight(`${apesContainerRef.current.scrollHeight}px`);
      }
    }, 500); */
    return () => {
      navBar!.style.background = "#1d0c47";
      wallet!.disconnect();
      
    }; // eslint-disable-next-line
  });

  const MapApes = (): JSX.Element => {
    const history = useHistory();
    // if (myapes.length === 0) {
      return (
        <>
          <Modal
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            open={ModalState}
          >
            <div className="ma-empty-modal">
              <span>
                <h1>UMMM...</h1>
              </span>
              <p>
                Looks like you don't own any scholaroids. If you would like to join the
                scholarship, go grab yourself an scholaroid over at opensea.io to join the
                ranks of these prestigious halls.
              </p>
              <button
                className="ma-modal-button"
                onClick={() => {
                  setModalState(false);
                  history.push("/");
                }}
              >
                Browse
              </button>
            </div>
          </Modal>
          {Array.from(new Array(7)).map(() => (
            <MyApeCard {...emptyApe} />
          ))}
        </>
      );
    // }

    // if (myapes.length < 6) {
    //   return (
    //     <>
    //       {myapes.map((attributes) => (
    //         <MyApeCard {...attributes} />
    //       ))}
    //       {Array.from(new Array(6 - myapes.length)).map(() => (
    //         <MyApeCard {...emptyApe} />
    //       ))}
    //     </>
    //   );
    // }

    // if (myapes.length >= 6) {
    //   if (myapes.length % 3 !== 0) {
    //     console.log((Math.floor(myapes.length / 3) + 1) * 3);
    //     return (
    //       <>
    //         {myapes.map((attributes) => (
    //           <MyApeCard {...attributes} />
    //         ))}
    //         {isbigScreen &&
    //           Array.from(
    //             new Array(
    //               (Math.floor(myapes.length / 3) + 1) * 3 - myapes.length
    //             )
    //           ).map(() => <MyApeCard {...emptyApe} />)}
    //       </>
    //     );
    //   }
    //   return (
    //     <>
    //       {myapes.map((attributes) => (
    //         <MyApeCard {...attributes} />
    //       ))}
    //     </>
    //   );
    // }
    return <></>;
  };

  return (
    <div className="my-apes" style={height !== "" ? { height } : {}}>
      <PageHeader title="MY" subtitle="APES" />
      <div ref={apesContainerRef} className="ma-container">
        {MapApes()}
      </div>
    </div>
  );
}
