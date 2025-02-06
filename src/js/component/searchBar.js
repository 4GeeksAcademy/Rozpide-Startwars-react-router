import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const peopleResults = store.people.filter(person =>
        person.name.toLowerCase().includes(value.toLowerCase())
      );

      const planetResults = store.planets.filter(planet =>
        planet.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredResults([...peopleResults, ...planetResults]);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Buscar personajes o planetas..."
      />
      {filteredResults.length > 0 && (
        <div className="autocomplete-list">
          {filteredResults.map((item, index) => (
            <Link
              key={index}
              to={`/details/${item.url.includes("people") ? "people" : "planets"}/${item.url.split("/")[5]}`}
              className="autocomplete-item"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
