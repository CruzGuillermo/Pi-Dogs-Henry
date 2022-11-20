import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../Redux/Actions.js";
import s from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogName(name));
    setName("");
  };

  return (
    <div className={s.contenedor}>
      <input
        type="text"
        placeholder="nombre..."
        onChange={(e) => handleInput(e)}
        value={name}
        className={s.Buscador}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={s.btngrad}
      >
        Buscar
      </button>
    </div>
  );
}
