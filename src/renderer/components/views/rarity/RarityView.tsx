import React from 'react';
import RarityCarousel from "./rarityComponent/carousel/RarityCarousel";
import ListView from "./rarityComponent/list/ListView";

interface IBodyFilter {
  filter: string;
  rarities: string;
  listView: boolean;
}

export default function RarityView({
  filter,
  rarities,
  listView,
}: IBodyFilter): JSX.Element {
  if (listView) {
    return (
      <h1>
        <ListView filter={filter} rarities={rarities} />
      </h1>
    );
  }

  return (
    <RarityCarousel filter={filter} rarities={rarities} />
    // <React3D/>
  );
}
