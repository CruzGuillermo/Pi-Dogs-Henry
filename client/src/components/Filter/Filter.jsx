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
    <div className="container">
      {/* Botón hamburguesa solo visible en móvil */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle filters"
        aria-expanded={open}
      >
        <div className={`bar ${open ? "bar1Active" : ""}`}></div>
        <div className={`bar ${open ? "bar2Active" : ""}`}></div>
        <div className={`bar ${open ? "bar3Active" : ""}`}></div>
      </button>

      {/* Contenedor de filtros */}
      <div className={`align ${open ? "show" : ""}`}>
        <div>
          <label className="font">A-Z ⇅</label>
          <select onChange={(e) => handleSort(e)}>
            <option hidden value="">
              Option
            </option>
            <option className="selectOrder" value="asc">
              A a Z
            </option>
            <option className="selectOrder" value="des">
              Z a A
            </option>
          </select>
        </div>

        <div>
          <label className="font">Peso ⇅</label>
          <select onChange={(e) => handleSortWeight(e)}>
            <option hidden value="">
              Option
            </option>
            <option className="selectOrder" value="weightasc">
              Max
            </option>
            <option className="selectOrder" value="weightdes">
              Min
            </option>
          </select>
        </div>

        <div>
          <label className="font">Creados/Existentes</label>
          <select onChange={(e) => handleFilterCreated(e)}>
            <option hidden value="">
              Option
            </option>
            <option value="todos">Todos</option>
            <option value="existentes">Existentes</option>
            <option value="creados">Creados</option>
          </select>
        </div>

        <div>
          <label className="font">Temperamentos</label>
          <select onChange={(e) => handleFilterDog(e)}>
            <option hidden value="">
              Option
            </option>
            <option value="all">Todos</option>
            {temperaments.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={(e) => handleReset(e)} className="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
