import "./index.scss";
import React from 'react';

import ApeintoshPopupWindow from "../../../../../../common/apeintosh/apeintoshPopupWindow.tsx/ApeintoshPopupWindow";
import ape1 from "../../../../../../../../assets/images/pictures/nsfw/sexy1.png";
import ape2 from "../../../../../../../../assets/images/pictures/nsfw/nice.png";
import ape3 from "../../../../../../../../assets/images/pictures/nsfw/xxx.png";
import NSFWImage from "./NSFWImage/NSFWImage";

const images: { url: string; text: string }[] = [
  {
    url: ape1,
    text: "sexy1",
  },
  {
    url: ape2,
    text: "nice",
  },
  {
    url: ape3,
    text: "xxx",
  },
];
export default function NSFWFolder({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): JSX.Element {
  return (
    <ApeintoshPopupWindow open={open}>
      <div className="h-nsfw">
        {images.map((img, index) => (
          <NSFWImage key={index} {...img} />
        ))}
        <span onClick={handleClose}>x</span>
      </div>
    </ApeintoshPopupWindow>
  );
}
