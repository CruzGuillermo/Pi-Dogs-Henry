import React, { useState } from "react";
import "./Filter.css";

function Filter({
  handleSort,
  handleSortWeight,
  handleFilterDog,
  handleFilterCreated,
  temperaments,
  handleReset,
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="filterSection">
      <button
        className="hamburgerBtn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle filters"
        aria-expanded={open}
      >
        <span className={`bar ${open ? "active1" : ""}`}></span>
        <span className={`bar ${open ? "active2" : ""}`}></span>
        <span className={`bar ${open ? "active3" : ""}`}></span>
      </button>

      <div className={`filtersContainer ${open ? "open" : ""}`}>
        {/* 4 filtros */}
        <div className="filterGroup">
          <label>A-Z ⇅</label>
          <select onChange={(e) => handleSort(e)}>
            <option hidden value="">
              Option
            </option>
            <option value="asc">A a Z</option>
            <option value="des">Z a A</option>
          </select>
        </div>

        <div className="filterGroup">
          <label>Peso ⇅</label>
          <select onChange={(e) => handleSortWeight(e)}>
            <option hidden value="">
              Option
            </option>
            <option value="weightasc">Max</option>
            <option value="weightdes">Min</option>
          </select>
        </div>

        <div className="filterGroup">
          <label>Creados/Existentes</label>
          <select onChange={(e) => handleFilterCreated(e)}>
            <option hidden value="">
              Option
            </option>
            <option value="todos">Todos</option>
            <option value="existentes">Existentes</option>
            <option value="creados">Creados</option>
          </select>
        </div>

        <div className="filterGroup">
          <label>Temperamentos</label>
          <select onChange={(e) => handleFilterDog(e)}>
            <option hidden value="">
              Option
            </option>
            <option value="all">Todos</option>
            {temperaments.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Botón Reset dentro del contenedor para que esté en hamburguesa */}
        <div className="resetGroup">
          <button className="resetBtn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Filter;
