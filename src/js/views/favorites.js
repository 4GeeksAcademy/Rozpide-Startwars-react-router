/*import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container mt-5">
      <h1>Favorites</h1>
      <div className="row">
        {store.favorites.map((item, index) => (
          <div className="col-4 mb-4" key={index}>
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.gender}</h5>
                <h5 className="card-title">{item.hair_color}</h5>
                <h5 className="card-title">{item.eye_color}</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => actions.removeFavorite(item)}
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

export { Favorites };*/
/*----------------------------------------------*/
/*import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="favorites-dropdown">
      <button className="btn btn-primary">
        Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
      </button>
      <div className="favorites-dropdown-content">
        {store.favorites.length === 0 ? (
          <span className="dropdown-item">No favorites yet</span>
        ) : (
          store.favorites.map((item, index) => (
            <a key={index} href="#">
              {item.name}
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export { Favorites };*/
/*----------------------------------------------*/
/*
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showFavoritesPage = () => {
    setIsOpen(false);
    navigate("/favorites");
  };

  return (
    <div className="favorites-dropdown">
      <button className="btn btn-primary" onClick={toggleDropdown}>
        Favorites <span className="badge bg-secondary">{store.favorites.length}</span> <i className="fas fa-caret-down"></i>
      </button>
      <div className={`favorites-dropdown-content ${isOpen ? "show" : ""}`}>
        {store.favorites.length === 0 ? (
          <span className="dropdown-item">No favorites yet</span>
        ) : (
          store.favorites.map((item, index) => (
            <a key={index} href="#">
              {item.name}
            </a>
          ))
        )}
      </div>
      <button className="btn btn-primary" onClick={showFavoritesPage}>
        Show Favorites
      </button>
    </div>
  );
};

export { Favorites };*/
import React, { useContext, useState, useRef } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const showFavoritesPage = () => {
    navigate("/favorites");
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleRemoveFavorite = (item) => {
    actions.removeFavorite(item);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="favorites-dropdown" ref={dropdownRef}>
      <button className="btn btn-primary" onClick={showFavoritesPage}>
        Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
        <button className="dropdown-toggle" onClick={toggleDropdown}><i className="fas fa-caret-down"></i></button>
      </button>
      <div className={`favorites-dropdown-content ${isOpen ? "show" : ""}`}>
        {store.favorites.length === 0 ? (
          <span className="dropdown-item">No favorites yet</span>
        ) : (
          store.favorites.map((item, index) => (
            <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
              <span>{item.name}</span>
              <i className="fas fa-trash trash-icon" onClick={() => handleRemoveFavorite(item)}></i>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { Favorites };


