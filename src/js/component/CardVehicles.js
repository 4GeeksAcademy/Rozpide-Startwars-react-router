
/*----------------------------------------------*/
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicles = () => {
  const { store, actions } = useContext(Context);
  const [activeFavorite, setActiveFavorite] = useState({});

  const toggleFavorite = (vehicles) => {
    if (activeFavorite[vehicles.name]) {
      actions.removeFavorite(vehicles);
    } else {
      actions.addFavorite(vehicles);
    }
    setActiveFavorite((prev) => ({
      ...prev,
      [vehicles.name]: !prev[vehicles.name],
    }));
  };

  const extractId = (url) => {
    return url.match(/\/([0-9]*)\/$/)[1];
  };

  return (
    <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
      {store.starships.map((vehicles, index) => (
        <div className="card card-vehicless mx-2" key={index} style={{ minWidth: "200px" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${extractId(vehicles.url)}.jpg`}
            className="card-img-top"
            alt={vehicles.name}
          />
          <div className="card-body">
            <h5 className="card-title">{vehicles.name}</h5>
            <h5 className="card-title">{vehicles.passengers}</h5>
            <h5 className="card-title">{vehicles.model}</h5>
            <button
              className={`favorite-button ${activeFavorite[vehicles.name] ? "active" : ""}`}
              onClick={() => toggleFavorite(vehicles)}
            >
              <i className="fas fa-heart"></i>
            </button>
            <Link to={`/details/vehicless/${extractId(vehicles.url)}`} className="btn btn-primary mt-2">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};



