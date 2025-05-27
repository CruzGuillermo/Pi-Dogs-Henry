import React from "react";
import styles from "./Filter.module.css";

function Filter({
  handleSort,
  handleSortWeight,
  handleFilterDog,
  handleFilterCreated,
  temperaments,
  handleReset,
}) {
  return (
    <div className={styles.align}>
      <div>
        <label className={styles.font}>A-Z ⇅</label>
        <select onChange={(e) => handleSort(e)}>
          <option hidden value="">
            Option
          </option>
          <option className={styles.selectOrder} value="asc">
            A a Z
          </option>
          <option className={styles.selectOrder} value="des">
            Z a A
          </option>
        </select>
      </div>
      <div>
        <label className={styles.font}>Peso ⇅</label>
        <select onChange={(e) => handleSortWeight(e)}>
          <option hidden value="">
            Option
          </option>
          <option className={styles.selectOrder} value="weightasc">
            Max
          </option>
          <option className={styles.selectOrder} value="weightdes">
            Min
          </option>
        </select>
      </div>
      <div>
        <label className={styles.font}>Creados/Existentes</label>
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
        <label className={styles.font}>Temperamentos</label>
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
        {/* <label className={styles.font}>Reset</label> */}
        <button onClick={(e) => handleReset(e)} className={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Filter;
