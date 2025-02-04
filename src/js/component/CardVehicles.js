
/*----------------------------------------------*/
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicles = () => {
  const { store, actions } = useContext(Context);
  const [activeFavorite, setActiveFavorite] = useState({});

  const toggleFavorite = (vehicle) => {
    if (activeFavorite[vehicle.name]) {
      actions.removeFavorite(vehicle);
    } else {
      actions.addFavorite(vehicle);
    }
    setActiveFavorite((prev) => ({
      ...prev,
      [vehicle.name]: !prev[vehicle.name],
    }));
  };

  const extractId = (url) => {
    return url.match(/\/([0-9]*)\/$/)[1];
  };

  return (
    <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
      {store.vehicles.map((vehicle, index) => (
        <div className="card card-vehicles mx-2" key={index} style={{ minWidth: "200px" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${extractId(vehicle.url)}.jpg`}
            className="card-img-top"
            alt={vehicle.name}
          />
          <div className="card-body">
            <h5 className="card-title">{vehicle.name}</h5>
            <button
              className={`favorite-button ${activeFavorite[vehicle.name] ? "active" : ""}`}
              onClick={() => toggleFavorite(vehicle)}
            >
              <i className="fas fa-heart"></i>
            </button>
            <Link to={`/details/vehicles/${extractId(vehicle.url)}`} className="btn btn-primary mt-2">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};



