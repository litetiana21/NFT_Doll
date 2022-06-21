import React from 'react';
import "./index.scss";

export default function MintMSGLoader(): JSX.Element {
  return (
    <div className="mm-loader">
      <span className="dot dot-1"></span>
      <span className="dot dot-2"></span>
      <span className="dot dot-3"></span>
      <span className="dot dot-4"></span>
    </div>
  );
}
