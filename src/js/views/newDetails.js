/*import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewDetails = () => {
  const { store } = useContext(Context);
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Buscar los detalles en el store según la categoría y el ID
    const item = 
      category === "people"
        ? store.people.find(p => p.url.split('/').slice(-2, -1)[0] === id)
        : category === "vehicles"
        ? store.vehicles.find(v => v.url.split('/').slice(-2, -1)[0] === id)
        : store.planets.find(pl => pl.url.split('/').slice(-2, -1)[0] === id);

    setDetails(item);
  }, [category, id, store]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`}
          className="card-img-top"
          alt={details.name || details.title}
        />
        <div className="card-body">
          <h1 className="card-title">{details.name || details.title}</h1>
          {category === "people" && (
            <>
              <p className="card-text">Height: {details.height}</p>
              <p className="card-text">Mass: {details.mass}</p>
              <p className="card-text">Hair Color: {details.hair_color}</p>
              <p className="card-text">Skin Color: {details.skin_color}</p>
              <p className="card-text">Eye Color: {details.eye_color}</p>
              <p className="card-text">Birth Year: {details.birth_year}</p>
              <p className="card-text">Gender: {details.gender}</p>
            </>
          )}
          {category === "planets" && (
            <>
              <p className="card-text">Climate: {details.climate}</p>
              <p className="card-text">Diameter: {details.diameter}</p>
              <p className="card-text">Gravity: {details.gravity}</p>
              <p className="card-text">Orbital Period: {details.orbital_period}</p>
              <p className="card-text">Population: {details.population}</p>
              <p className="card-text">Rotation Period: {details.rotation_period}</p>
              <p className="card-text">Surface Water: {details.surface_water}</p>
              <p className="card-text">Terrain: {details.terrain}</p>
            </>
          )}
          {category === "vehicles" && (
            <>
              <p className="card-text">Model: {details.model}</p>
              <p className="card-text">Manufacturer: {details.manufacturer}</p>
              <p className="card-text">Cost in Credits: {details.cost_in_credits}</p>
              <p className="card-text">Length: {details.length}</p>
              <p className="card-text">Max Atmosphering Speed: {details.max_atmosphering_speed}</p>
              <p className="card-text">Crew: {details.crew}</p>
              <p className="card-text">Passengers: {details.passengers}</p>
              <p className="card-text">Cargo Capacity: {details.cargo_capacity}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewDetails };*/
/*----------------------------------------------*/
/*import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewDetails = () => {
  const { store } = useContext(Context);
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Buscar los detalles en el store según la categoría y el ID
    const item = 
      category === "people"
        ? store.people.find(p => p.url.split('/').slice(-2, -1)[0] === id)
        : store.planets.find(pl => pl.url.split('/').slice(-2, -1)[0] === id);

    setDetails(item);

    // Generar la URL de la imagen
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;
    setImageUrl(imageUrl);
  }, [category, id, store]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={details.name || details.title}
        />
        <div className="card-body">
          <h1 className="card-title">{details.name || details.title}</h1>
          {category === "people" && (
            <>
              <p className="card-text">Height: {details.height}</p>
              <p className="card-text">Mass: {details.mass}</p>
              <p className="card-text">Hair Color: {details.hair_color}</p>
              <p className="card-text">Skin Color: {details.skin_color}</p>
              <p className="card-text">Eye Color: {details.eye_color}</p>
              <p className="card-text">Birth Year: {details.birth_year}</p>
              <p className="card-text">Gender: {details.gender}</p>
            </>
          )}
          {category === "planets" && (
            <>
              <p className="card-text">Climate: {details.climate}</p>
              <p className="card-text">Diameter: {details.diameter}</p>
              <p className="card-text">Gravity: {details.gravity}</p>
              <p className="card-text">Orbital Period: {details.orbital_period}</p>
              <p className="card-text">Population: {details.population}</p>
              <p className="card-text">Rotation Period: {details.rotation_period}</p>
              <p className="card-text">Surface Water: {details.surface_water}</p>
              <p className="card-text">Terrain: {details.terrain}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewDetails };*/
/*----------------------------------------------*/
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewDetails = () => {
  const { store } = useContext(Context);
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Buscar los detalles en el store según la categoría y el ID
    const item = 
      category === "people"
        ? store.people.find(p => p.url.split('/').slice(-2, -1)[0] === id)
        : category === "planets"
        ? store.planets.find(pl => pl.url.split('/').slice(-2, -1)[0] === id)
        : null;

    setDetails(item);

    // Generar la URL de la imagen
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;
    setImageUrl(imageUrl);
  }, [category, id, store]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card w-100">
        <div className="card-body d-flex">
          <div className="img-container" style={{ width: "600px", height: "400px" }}>
            <img src={imageUrl} className="img-fluid" alt={details.name || details.title} />
          </div>
          <div className="details-container ms-3">
            <h1>{details.name || details.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque vehicula nulla, a fermentum magna vestibulum et. Nulla facilisi. Quisque bibendum semper risus, in scelerisque purus ullamcorper in. Sed at sem vehicula, scelerisque ex vel, consequat urna.</p>
          </div>
        </div>
        <div className="card-footer d-flex flex-wrap">
          {category === "people" && (
            <>
              <div className="prop-container me-4">
                <h5>Height</h5>
                <p>{details.height}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Mass</h5>
                <p>{details.mass}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Hair Color</h5>
                <p>{details.hair_color}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Skin Color</h5>
                <p>{details.skin_color}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Eye Color</h5>
                <p>{details.eye_color}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Birth Year</h5>
                <p>{details.birth_year}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Gender</h5>
                <p>{details.gender}</p>
              </div>
            </>
          )}
          {category === "planets" && (
            <>
              <div className="prop-container me-4">
                <h5>Climate</h5>
                <p>{details.climate}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Diameter</h5>
                <p>{details.diameter}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Gravity</h5>
                <p>{details.gravity}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Orbital Period</h5>
                <p>{details.orbital_period}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Population</h5>
                <p>{details.population}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Rotation Period</h5>
                <p>{details.rotation_period}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Surface Water</h5>
                <p>{details.surface_water}</p>
              </div>
              <div className="prop-container me-4">
                <h5>Terrain</h5>
                <p>{details.terrain}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { NewDetails };


