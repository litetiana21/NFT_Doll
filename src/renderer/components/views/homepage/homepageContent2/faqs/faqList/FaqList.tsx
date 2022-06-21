import React from 'react';
// import "./index.scss";
import HomeAcordion from "../../homeAcordion/HomeAcordion";
import { useState } from "react";
export default function FaqList(): JSX.Element {
  const [current, setCurrent] = useState(10);

  const handleExpanding = (index: number) => {
    if (current === index) {
      setCurrent(10);
    } else {
      setCurrent(index);
    }
  };
  return (
    <div className="hp-roadmap-list">
      <HomeAcordion
        header="How can i buy an scholaroid?"
        text="You will need to have a Metamask wallet. If you don’t have one, you can obtain it here: https://metamask.io/
        The NFT’s are minted on the Binance Smart Chain (BEP20). This means you will need some BNB in your Metamask wallet in order to be able to MINT NFT’s from the NFT.scholarshicoin.org website.
        Here you will find instructions on how to add the Binance Smart Chain network to your Metamask Wallet: https://docs.binance.org/smart-chain/wallet/metamask.html 
        Minting Fee: The fee for minting 1 NFT is 0.5 BNB (Each)"
        expanded={current === 0}
        onChange={() => handleExpanding(0)}
      />
      <HomeAcordion
        header="How many Scholaroid NFT's are there?"
        text="There is a total of 20 023 NFT's available for Minting.
        When Minting, you will randomly obtain an NFT from our creative selection. You could get an exclusive Artwork, Elite Artwork or a Scholaroid.
        
        Your chances of obtaining the:
        •    Exclusive Artwork is 0.005% (1:20023)
        •    Elite Artwork is 0.11% (22:20023)
        •    Scholaroid is 99.88% (20000:20023)"
        expanded={current === 1}
        onChange={() => handleExpanding(1)}
      />
      <HomeAcordion
        header="Can I mint a Scholaroid via Mobile?"
        text="Yes. You can mint through the Metamask app on your mobile when viewing https://nft.scholarshipcoin.org on the Metamask browser."
        expanded={current === 2}
        onChange={() => handleExpanding(2)}
      />
      <HomeAcordion
        header="Is there a limit?"
        text="Yes and no. People are limited to several scholaroids per transaction. This does mean you can return to the mint section as many times as you want though."
        expanded={current === 3}
        onChange={() => handleExpanding(3)}
      />{" "}
      <HomeAcordion
        header="How many Scholaroid traits are there?"
        text="Scholaroids have a total of 232 possible traits with 7 total different categories (Fur/Skin, Head, Body (Clothing), Mouth, Eyewear, Teeth, weapon, spirit animal and background). You can see these traits in all their glory in the traits section of the website."
        expanded={current === 4}
        onChange={() => handleExpanding(4)}
      />{" "}
      <HomeAcordion
        header="Is there a Rarity System?"
        text="Yes, rarity is incredibly important to us. So much so that we have designed a trait hierarchy system that lists the traits from ‘Common’ all the way through to ‘Mythic’ and each rank has a corresponding % chance of being minted. 
        All of the Scholarship’s traits and their rarity % can be viewed over in our ‘Scholarship Trait’ section."
        expanded={current === 5}
        onChange={() => handleExpanding(5)}
      />
      <HomeAcordion
        header="Will there be a secondary market? A marketplace?"
        text="Yes, we will be creating a marketplace on OpenBisea as soon as we go live so your Scholaroids can trade immediately. 
        NFT space on Binance Smart Chain is still new. 
        We will do all we can to make our project a seamless experience for users.
        We will be creating our own marketplace on this website in the near future."
        expanded={current === 6}
        onChange={() => handleExpanding(6)}
      />
      <HomeAcordion
        header="Do I own the Scholaroid once its Minted?"
        text="Yes. Full intellectual properties are given to you. You can learn more about your rights as a scholaroid holder in our Terms & Condition section."
        expanded={current === 7}
        onChange={() => handleExpanding(7)}
      />
      <HomeAcordion
        header="Do I own the Scholaroid once its Minted?"
        text="Yes. Full intellectual properties are given to you. You can learn more about your rights as a scholaroid holder in our Terms & Condition section."
        expanded={current === 9}
        onChange={() => handleExpanding(9)}
      />
    </div>
  );
}
