import { React, useState, useEffect } from 'react';
import './Main.css';
import CountryCard from '../CountryCard/CountryCard.js';
import { getCountries } from '../services/countries.js';

export default function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>API&apos;s, Array Methods, and React</h1>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </div>
  );
}
