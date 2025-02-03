/*import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CardVehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      {store.vehicles.map((vehicle, index) => (
        <div className="col-4 mb-4" key={index}>
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
              className="card-img-top"
              alt={vehicle.name}
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <button
                className="btn btn-outline-primary"
                onClick={() => actions.addFavorite(vehicle)}
              >
                + Add to Favorites
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

  return (
    <div className="row">
      {store.vehicles.map((vehicle, index) => (
        <div className="col-4 mb-4" key={index}>
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`}
              className="card-img-top"
              alt={vehicle.name}
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <button
                className={`favorite-button ${
                  activeFavorite[vehicle.name] ? "active" : ""
                }`}
                onClick={() => toggleFavorite(vehicle)}
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


