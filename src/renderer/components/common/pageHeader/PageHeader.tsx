import React from 'react';
import "./index.scss";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}): JSX.Element {
  return (
    <div className="page-header">
      <span id="line" />
      <h1>
        <p>{title}</p>
        {subtitle}
      </h1>
      <span id="line" />
    </div>
  );
}
