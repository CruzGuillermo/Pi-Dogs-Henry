import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={s.container}>
      <div className={s.container2}>
        <h1 className={s.letras}> BIENVENIDOS A LA API DE PERROS</h1>
        <h2 className={s.letras}> 🔍 Podras buscar la raza de tu perro favorito! </h2>
        <h2 className={s.letras}>🔍 Podes filtrar por orden Alfabetico!</h2>
        <h2 className={s.letras}>🔍 Podes filtrar por Temperamentos!</h2>
        <h2 className={s.letras}>🔍 Podes filtrar por Peso!</h2>
        <h2 className={s.letras}> 🐶 Tambien podes crear una raza de Perro 🐶</h2>
        <div className={s.btnContainer}>
          <Link to="home">
            <button className={s.button}>INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
