import React from 'react';
import "./index.scss";

export default function TraitLevel({
  color,
  text,
}: {
  color: string;
  text: string;
}): JSX.Element {
  return (
    <div className="tl-wrapper" style={{ border: `3px solid ${color}` }}>
      <h2 className="tl-content" style={{ backgroundColor: color }}>
        {text}
      </h2>
    </div>
  );
}
