
/*----------------------------------------------*/

/*import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const CardPlanets = () => {
  const { store, actions } = useContext(Context);
  const [activeFavorite, setActiveFavorite] = useState({});

  const toggleFavorite = (planet) => {
    if (activeFavorite[planet.name]) {
      actions.removeFavorite(planet);
    } else {
      actions.addFavorite(planet);
    }
    setActiveFavorite((prev) => ({
      ...prev,
      [planet.name]: !prev[planet.name],
    }));
  };

  return (
    <div className="d-flex overflow-auto">
      {store.planets.map((planet, index) => (
        <div className="col-4 mb-4" key={index}>
          <div className="card mx-2">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
              className="card-img-top"
              alt={planet.name}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <button
                className={`favorite-button ${
                  activeFavorite[planet.name] ? "active" : ""
                }`}
                onClick={() => toggleFavorite(planet)}
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};*/
/*----------------------------------------------*/
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanets = () => {
  const { store, actions } = useContext(Context);
  const [activeFavorite, setActiveFavorite] = useState({});

  const toggleFavorite = (planet) => {
    if (activeFavorite[planet.name]) {
      actions.removeFavorite(planet);
    } else {
      actions.addFavorite(planet);
    }
    setActiveFavorite((prev) => ({
      ...prev,
      [planet.name]: !prev[planet.name],
    }));
  };

  const extractId = (url) => {
    return url.match(/\/([0-9]*)\/$/)[1];
  };

  return (
    <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
      {store.planets.map((planet, index) => (
        <div className="card card-planets mx-2" key={index} style={{ minWidth: "200px" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${extractId(planet.url)}.jpg`}
            className="card-img-top"
            alt={planet.name}
          />
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <h5 className="card-title">Population: {planet.population}</h5>
            <h5 className="card-title">Terrain: {planet.terrain}</h5>
            <button
              className={`favorite-button ${activeFavorite[planet.name] ? "active" : ""}`}
              onClick={() => toggleFavorite(planet)}
            >
              <i className="fas fa-heart"></i>
            </button>
            <Link to={`/details/planets/${extractId(planet.url)}`} className="btn btn-primary mt-2">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};





