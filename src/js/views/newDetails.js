/*----------------------------------------------*/
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const NewDetails = () => {
  const { store } = useContext(Context);
  const { category, id } = useParams();
  const [details, setDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    // Buscar los detalles en el store según la categoría y el ID
    const item =
      category === "people"
        ? store.people.find((p) => p.url.split("/").slice(-2, -1)[0] === id)
        : category === "planets"
        ? store.planets.find((pl) => pl.url.split("/").slice(-2, -1)[0] === id)
        : null;

    setDetails(item);

    // Generar la URL de la imagen
    const initialImageUrl = `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;

    const fetchValidImageUrl = async (initialUrl) => {
      let response = await fetch(initialUrl);
      let currentId = parseInt(id, 10); // Convertir el id a número

      // Si la imagen no existe, encontrar la primera URL válida de la misma categoría
      while (!response.ok) {
        currentId++;
        const fallbackImageUrl = `https://starwars-visualguide.com/assets/img/${category}/${currentId}.jpg`;
        response = await fetch(fallbackImageUrl);

        // Para evitar un bucle infinito, podemos limitar el número de intentos
        if (currentId > 300) {
          const randomNumber = Math.floor(Math.random() * 10) + 1;
          return `https://starwars-visualguide.com/assets/img/characters/${randomNumber}.jpg`;
        } // Ajusta este límite según sea necesario
      }

      return response.ok ? response.url : initialUrl;
    };

    fetchValidImageUrl(initialImageUrl).then((url) => {
      setImageUrl(url);
      setLoadingImage(false);
    });
  }, [category, id, store]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card w-100">
        <div className="card-body d-flex">
          <div
            className="img-container"
            style={{ width: "1000px", height: "300px" }}
          >
            {loadingImage ? (
              <div className="text-center">Loading.......</div>
            ) : (
              <img
                src={imageUrl}
                className="img-fluid"
                alt={details.name || details.title}
                style={{ width: "500px", height: "290px" }}
              />
            )}
          </div>
          <div className="details-container ms-3">
            <h1>{details.name || details.title}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              scelerisque vehicula nulla, a fermentum magna vestibulum et. Nulla
              facilisi. Quisque bibendum semper risus, in scelerisque purus
              ullamcorper in. Sed at sem vehicula, scelerisque ex vel, consequat
              urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur scelerisque vehicula nulla, a fermentum magna vestibulum
              et. Nulla facilisi. Quisque bibendum semper risus, in scelerisque
              purus ullamcorper in. Sed at sem vehicula, scelerisque ex vel,
              consequat urna.
            </p>
          </div>
        </div>
        <div className="card-footer d-flex flex-wrap justify-content-between">
          {category === "people" && (
            <>
              <div className="prop-container me-5">
                <h5>Height</h5>
                <p>{details.height}</p>
              </div>
              <div className="prop-container me-5">
                <h5>Mass</h5>
                <p>{details.mass}</p>
              </div>
              <div className="prop-container me-5">
                <h5>Hair Color</h5>
                <p>{details.hair_color}</p>
              </div>
              <div className="prop-container me-5">
                <h5>Skin Color</h5>
                <p>{details.skin_color}</p>
              </div>
              <div className="prop-container me-5">
                <h5>Eye Color</h5>
                <p>{details.eye_color}</p>
              </div>
              <div className="prop-container me-5">
                <h5>Birth Year</h5>
                <p>{details.birth_year}</p>
              </div>
              <div className="prop-container me-5">
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
