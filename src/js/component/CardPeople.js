
/*----------------------------------------------*/

/*import React, { useContext, useState } from "react";
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
    <div className=" d-flex overflow-auto">
      {store.people.map((person, index) => (
        <div className="col-12 mb-2 card card-people mx-2" key={index}>
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
};*/
/*----------------------------------------------*/
/*import React, { useContext, useState } from "react";
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

  const extractId = (url) => {
    return url.match(/\/([0-9]*)\/$/)[1];
  };

  return (
    <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
      {store.people.map((person, index) => (
        <div className="card card-people mx-2" key={index} style={{ minWidth: "200px" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${extractId(person.url)}.jpg`}
            className="card-img-top"
            alt={person.name}
          />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <h5 className="card-title">Gender: {person.gender}</h5>
            <h5 className="card-title">Hair Color: {person.hair_color}</h5>
            <h5 className="card-title">Eye Color: {person.eye_color}</h5>
            <button
              className={`favorite-button ${activeFavorite[person.name] ? "active" : ""}`}
              onClick={() => toggleFavorite(person)}
            >
              <i className="fas fa-heart"></i>
            </button>
            <Link to={`/details/people/${extractId(person.url)}`} className="btn btn-primary mt-2">
              View Details
            </Link>
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
        <div className="card card-people mx-2" key={index} style={{ minWidth: "200px" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${person.url.split('/').slice(-2, -1)[0]}.jpg`}
            className="card-img-top"
            alt={person.name}
          />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <button
              className={`favorite-button ${activeFavorite[person.name] ? "active" : ""}`}
              onClick={() => toggleFavorite(person)}
            >
              <i className="fas fa-heart"></i>
            </button>
            <Link to={`/details/people/${person.url.split('/').slice(-2, -1)[0]}`} className="btn btn-primary mt-2">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};



