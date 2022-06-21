import React from 'react';
import "./index.scss";
// import { IApeTrait } from "../../../../api/types/apeTrait";
import { useState, useEffect, useRef } from "react";
import Trait from "./trait/Trait";

export default function MyApeCard({
  name,
  symbol,
  description,
  image,
  animation_url,
  external_url,
  edition,
  background_color,
  attributes,
  properties,
// }: IApeTrait): JSX.Element {
}: any): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const [zIndex, setZIndex] = useState(1);

  useEffect(() => {
    if (expanded) {
      setZIndex(10);
    } else {
      setTimeout(() => setZIndex(1), 500);
    }
  }, [expanded]);

  const imgRef = useRef<HTMLImageElement>(null);

  if (imgRef && imgRef.current && imgRef.current.clientHeight > 0) {
    console.log(`${imgRef.current.clientHeight}px`);
  }
  return (
    <div
      className="ma-card"
      style={
        imgRef && imgRef.current && imgRef.current.clientHeight > 0
          ? { height: `${imgRef.current.clientHeight}px` }
          : {}
      }
      onClick={() => setExpanded(!expanded)}
    >
      {image !== "" ? (
        <div
          className={`ma-card-content ${expanded ? "ma-card-expanded" : ""}`}
          style={{ zIndex: zIndex }}
        >
          <img ref={imgRef} src={image} alt="trait-img" />
          <div className="ma-card-attr">
            <div className="ma-card-header">
              <div />
              <h1>{name.substr(10, name.length - 1)}</h1>
              <div />
            </div>
            <div className="ma-card-body">
              {/* {attributes.slice(0, attributes.length - 3).map((trait) => (
                <Trait {...trait} />
              ))} */}
            </div>
          </div>
        </div>
      ) : (
        <div className="ma-card-content"></div>
      )}
    </div>
  );
}
