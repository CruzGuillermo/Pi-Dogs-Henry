import React from "react";
import { Link } from "react-router-dom";
import "./Dogs.css";

function Dogs({ id, name, image, temperament, weightMin, weightMax }) {
  return (
    <Link to={`/home/${id}`} className="containerPadre">
      <div className="container">
        <div className="card">
          <div className="images">
            <img alt="Image Dog" src={image} width="240px" height="200px" />
          </div>
          <div className="content">
            <p>{name}</p>
            <p>{weightMin} - {weightMax} kg</p>
            <p>Temperamentos: {temperament}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Dogs;
