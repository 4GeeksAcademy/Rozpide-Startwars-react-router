
/*
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
         <span className="badge bg-secondary">Favorites :{store.favorites.length}</span>
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

export { Favorites };*/
/*----------------------------------------------*/
/*import React, { useContext, useState, useRef } from "react";
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
        <i className="fas fa-caret-down dropdown-toggle" onClick={toggleDropdown}></i>
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

export { Favorites };*/
/*----------------------------------------------*/

/*
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

  const showFavoritesPage = (e) => {
    if (e.target.className.includes("dropdown-toggle")) {
      toggleDropdown(e);
    } else {
      navigate("/favorites");
    }
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
        <i className="fas fa-caret-down dropdown-toggle" onClick={toggleDropdown}></i>
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

export { Favorites };*/
/*----------------------------------------------*/

import React, { useContext, useState, useRef } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const showFavoritesPage = (e) => {
    if (e.target.className.includes("dropdown-toggle")) {
      toggleDropdown(e);
    } else {
      navigate("/favorites");
    }
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
      <button className="btn btn-primary d-flex align-items-center" onClick={showFavoritesPage}>
        Favorites : <span className="badge bg-secondary">{store.favorites.length}</span>
        <i className="fas fa-caret-down dropdown-toggle ms-4" onClick={toggleDropdown}></i>
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

 
