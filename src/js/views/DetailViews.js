import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailView = () => {
  const { store } = useContext(Context);
  const { name } = useParams();
  const person = store.people.find(p => p.name === name);
  const vehicle = store.vehicles.find(v => v.name === name);
  const planet = store.planets.find(pl => pl.name === name);

  const item = person || vehicle || planet;

  return (
    <div className="container mt-5">
      {item && (
        <>
          <img
            src={`https://starwars-visualguide.com/assets/img/${
              person
                ? "characters"
                : vehicle
                ? "vehicles"
                : "planets"
            }/${item.url.split("/").slice(-2)[0]}.jpg`}
            className="img-fluid"
            alt={item.name}
          />
          <h1>{item.name}</h1>
          <p>{/* Aquí puedes agregar más detalles sobre el item */}</p>
        </>
      )}
    </div>
  );
};

export { DetailView };
