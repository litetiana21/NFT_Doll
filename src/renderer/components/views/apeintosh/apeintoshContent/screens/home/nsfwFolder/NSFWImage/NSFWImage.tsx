import "./index.scss";
import React from 'react';

export default function NSFWImage({
  url,
  text,
}: {
  url: string;
  text: string;
}): JSX.Element {
  return (
    <div className="nsfw-img">
      <img src={url} alt="nsfw" />
      {text}.jpg
    </div>
  );
}
