import React from "react";
import "./Paginado.css";

export default function Paginado({
  dogsPerPage,
  allDogs,
  paginado,
  currentPage,
}) {
  const totalPages = Math.ceil(allDogs / dogsPerPage);
  const maxVisiblePages = 5;

  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="containerPag" aria-label="Paginación de resultados">
      <ul className="listPag">
        {/* Botón Anterior */}
        <li className="item">
          <button
            className="link"
            onClick={() => currentPage > 1 && paginado(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            &laquo;
          </button>
        </li>

        {/* Página 1 */}
        {startPage > 1 && (
          <>
            <li className="item">
              <button
                className="link"
                onClick={() => paginado(1)}
                aria-label="Página 1"
              >
                1
              </button>
            </li>
            {startPage > 2 && <li className="dots">...</li>}
          </>
        )}

        {/* Páginas visibles */}
        {pageNumbers.map((p) => (
          <li key={p} className="item">
            <button
              type="button"
              className={`link ${currentPage === p ? "active" : ""}`}
              onClick={() => paginado(p)}
              aria-current={currentPage === p ? "page" : undefined}
            >
              {p}
            </button>
          </li>
        ))}

        {/* Última página */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <li className="dots">...</li>}
            <li className="item">
              <button
                className="link"
                onClick={() => paginado(totalPages)}
                aria-label={`Página ${totalPages}`}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Botón Siguiente */}
        <li className="item">
          <button
            className="link"
            onClick={() =>
              currentPage < totalPages && paginado(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}
