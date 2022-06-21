import React from 'react';
import "./index.scss";
import TraitLevel from "./traitLevel/traitLevel";
import PrimaryButton from "../../../../common/primaryButton/primaryButton";
import { useHistory } from "react-router-dom";

export default function TraitRatity(): JSX.Element {
  const history = useHistory();
  return (
    <div id="traits" className="hp-trait" data-aos="zoom-in">
      <div className="hp-trait-content">
        <h1>Trait Rarity</h1>
        <p>
        All scholaroids are different, but some scholaroids are more rare than others. That’s why we’ve established a trait rarity system to tell which of our students are likely destined to be more valuable in terms of rarity.
        </p>
        <p>
        There are 232 total traits in the scholarship and these have been categorized into a tier based system (seen on the right). Traits are ranked from ‘common’ all the way through to ‘mythic’ and each rank has a corresponding % chance of being minted.
        </p>
        <p>
        All of the Scholarship’s traits and their rarity % can be viewed over in our ‘traits’ section.
        </p>
        <PrimaryButton
          className="hp-trait-btn"
          onClick={() => history.push("/rarities")}
        >
          View Traits
        </PrimaryButton>
      </div>
      <div className="hp-trait-levels">
        <TraitLevel text="common" color="var(--common)" />
        <TraitLevel text="uncommon" color="var(--uncommon)" />
        <TraitLevel text="rare" color="var(--rare)" />
        <TraitLevel text="super rare" color="var(--veryrare)" />
        <TraitLevel text="mythic" color="var(--mythic)" />
      </div>
    </div>
  );
}
