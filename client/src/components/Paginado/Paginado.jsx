import React from "react";
import s from "./Paginado.module.css";

export default function Paginado({
  dogsPerPage,
  allDogs,
  paginado,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={s.containerPag}>
      <ul className={s.listPag}>
        {pageNumbers &&
          pageNumbers.map((p) => (
            <li key={p} className={s.item} onClick={() => paginado(p)}>
              <span  href="#" className={s.link} >
                {p}
              </span>
            </li>
          ))}
          </ul>
    </div>
  );
}
