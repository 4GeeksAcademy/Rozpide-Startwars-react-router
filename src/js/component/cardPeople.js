import React from "react";
import { Link } from "react-router-dom";
import { store, actions } from "../store/flux"; // Adjust the path as necessary

export const CardPeople = () => {
    return (
        <div className="row">
        {store && store.people && store.people.map((person, index) => (
          <div className="col-4 mb-4" key={index}>
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  index + 1
                }.jpg`}
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
};