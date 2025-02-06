/*----------------------------------------------*/
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
    <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
      {store.people.map((person, index) => (
        <div
          className="card card-people mx-2"
          key={index}
          style={{ minWidth: "200px" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              person.url.split("/").slice(-2, -1)[0]
            }.jpg`}
            className="card-img-top"
            alt={person.name}
          />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            

            <div className="d-flex justify-content-between me-3">
              <Link
                to={`/details/people/${person.url.split("/").slice(-2, -1)[0]}`}
                className="btn btn-primary mt-2 ms-2"
              >
                View Details
              </Link>
              <button
                className={`favorite-button ${
                  activeFavorite[person.name] ? "active" : ""
                }me-3`}
                onClick={() => toggleFavorite(person)}
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