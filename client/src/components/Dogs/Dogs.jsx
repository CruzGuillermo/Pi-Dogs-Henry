import React from "react";
import { Link } from "react-router-dom";
import "./Dogs.css";

function Dogs({ id, name, image, temperament, weightMin, weightMax }) {
  return (
    <Link to={`/home/${id}`} className="dogCardLink">
      <article className="dogCard">
        <div className="dogImageWrapper">
          <img alt={`Dog ${name}`} src={image} className="dogImage" />
        </div>
        <div className="dogInfo">
          <h3 className="dogName">{name}</h3>
          <p className="dogWeight">{weightMin} - {weightMax} kg</p>
          <p className="dogTemperament">Temperamentos: {temperament}</p>
        </div>
      </article>
    </Link>
  );
}

export default Dogs;
