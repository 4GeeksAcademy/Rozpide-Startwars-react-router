import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "../views/favorites"; // Importamos el componente Favorites
import SearchBar from "./searchBar";// Importamos el componente SearchBar para poder utilizarlo en el Navbar

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="d-flex justify-content-center w-1000">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
              alt="Star Wars Logo"
              style={{ width: "100px", height: "auto" }} // Reducir el tamaño del logo
            />
          </span>
        </Link>
        {/*<div className="me-10 d-flex align-items-center">
          <Link to="/demo" className="btn btn-primary">
            Check the Context in action
          </Link>
        </div>*/}
        <SearchBar />
        
        <Favorites />
      </div>
      
    </nav>
  );
};
