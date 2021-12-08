import { React, useState, useEffect } from 'react';
import './Main.css';
import CountryCard from '../CountryCard/CountryCard.js';
import { getCountries } from '../services/countries.js';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [contQuery, setContQuery] = useState('All');
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchData();
  }, []);

  const filteredCountries = (countries) => {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query) &&
        (country.continent === contQuery || contQuery === 'All')
    );
  };
  return (
    <div>
      <h1>API&apos;s, Array Methods, and React</h1>
      <button value={sorted} onClick={(e) => setSorted(true)}>
        Sort A-Z
      </button>
      <input
        placeholder="Search Countries"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <select value={contQuery} onChange={(e) => setContQuery(e.target.value)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
      <div className="main">
        {filteredCountries(countries).map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </div>
  );
}
