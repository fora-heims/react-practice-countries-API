import React from 'react';
import './CountryCard.css';

export default function CountryCard(props) {
  return (
    <div className="country-card">
      <p className="name">{props.name}</p>
      <img alt={props.name} src={`https://flagcdn.com/48x36/${props.iso2.toLowerCase()}.png`} />
    </div>
  );
}
