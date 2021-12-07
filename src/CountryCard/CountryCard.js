import React from 'react';
import './CountryCard.css';

export default function CountryCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.continent}</p>
    </div>
  );
}
