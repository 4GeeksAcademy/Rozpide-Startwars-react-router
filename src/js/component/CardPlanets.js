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
  return (
    <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
      {store.planets.map((planet, index) => (
        <div
          className="card card-planets mx-2"
          key={index}
          style={{ minWidth: "200px" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${
              index === 0 && store.planets[1]
                ? store.planets[1].url.split("/").slice(-2, -1)[0]
                : planet.url.split("/").slice(-2, -1)[0]
            }.jpg`}
            className="card-img-top"
            alt={planet.name}
          />
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <div className="d-flex justify-content-between me-3">
            <Link
              to={`/details/planets/${planet.url.split("/").slice(-2, -1)[0]}`}
              className="btn btn-primary mt-2"
            >
              View Details
            </Link>
            <button
              className={`favorite-button ${
                activeFavorite[planet.name] ? "active" : ""
              }me-3`}
              onClick={() => toggleFavorite(planet)}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
