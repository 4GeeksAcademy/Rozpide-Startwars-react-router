import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CardPlanets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      {store.planets.map((planet, index) => (
        <div className="col-4 mb-4" key={index}>
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
              className="card-img-top"
              alt={planet.name}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <button
                className="btn btn-outline-primary"
                onClick={() => actions.addFavorite(planet)}
              >
                + Add to Favorites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
