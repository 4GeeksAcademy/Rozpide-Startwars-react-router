/*import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};*/
/*----------------------------------------------*/
/*import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "../views/favorites"; // Importamos el componente Favorites
import { BotonToDemo } from "./botonToDemo";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-3">
		
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto d-flex align-items-center">
         <BotonToDemo /> 
          <Favorites />
        </div>
      </div>
    </nav>
  );
};*/
import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "../views/favorites"; // Importamos el componente Favorites

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
        <Favorites />
      </div>
    </nav>
  );
};
