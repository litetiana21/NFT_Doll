import React from 'react';
import "./index.scss";

export default function TeamMember({
  name,
  role,
  ape,
}: {
  name: string;
  role: string;
  ape: string;
}): JSX.Element {
  return (
    <div className="hp-tm">
      <img src={ape} alt={name} />
      <div className="hp-tm-l">
        <h2>@{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}
