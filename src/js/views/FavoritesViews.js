import React, { useContext } from "react";
import { Context } from "../store/appContext";

const FavoritesView = () => {
  const { store, actions } = useContext(Context);

  const handleRemoveFavorite = (item) => {
    actions.removeFavorite(item);
  };

  return (
    <div className="container mt-5">
      <h1>Favorites</h1>
      <div className="row">
        {store.favorites.map((item, index) => (
          <div className="col-4 mb-4" key={index}>
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/${
                  store.people.find((person) => person.name === item.name)
                    ? "characters"
                    : store.vehicles.find((vehicle) => vehicle.name === item.name)
                    ? "vehicles"
                    : "planets"
                }/${index + 1}.jpg`}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleRemoveFavorite(item)}
                >
                  - Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FavoritesView };
