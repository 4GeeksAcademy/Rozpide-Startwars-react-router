/*import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CardPeople = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="row">
      {store.people.map((person, index) => (
        <div className="col-4 mb-4" key={index}>
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
              className="card-img-top"
              alt={person.name}
            />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <button
                className="btn btn-outline-primary"
                onClick={() => actions.addFavorite(person)}
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

export const CardPeople = () => {
  const { store, actions } = useContext(Context);
  const [activeFavorite, setActiveFavorite] = useState({});

  const toggleFavorite = (person) => {
    if (activeFavorite[person.name]) {
      actions.removeFavorite(person);
    } else {
      actions.addFavorite(person);
    }
    setActiveFavorite((prev) => ({
      ...prev,
      [person.name]: !prev[person.name],
    }));
  };

  return (
    <div className="row">
      {store.people.map((person, index) => (
        <div className="col-4 mb-4" key={index}>
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
              className="card-img-top"
              alt={person.name}
            />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <button
                className={`favorite-button ${
                  activeFavorite[person.name] ? "active" : ""
                }`}
                onClick={() => toggleFavorite(person)}
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

