import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Details = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const item = store.people.find(p => p.url.endsWith(id)) || 
               store.vehicles.find(v => v.url.endsWith(id)) || 
               store.planets.find(pl => pl.url.endsWith(id));

  if (!item) return <div>Item not found</div>;

  return (
    <div className="container mt-5">
      <h1>{item.name}</h1>
      <p>Gender: {item.gender}</p>
      <p>Model: {item.model}</p>
      <p>Climate: {item.climate}</p>
      {/* Agregar más detalles según si es persona, vehículo o planeta */}
    </div>
  );
};

export { Details };
