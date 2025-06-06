import React from "react";
import loading from "../image/doge.gif";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <img
          src={loading}
          alt="loading"
          className="loading-image"
        />
        <p className="loading-text">Cargando...</p>
      </div>
    </div>
  );
}

export default Loading;
