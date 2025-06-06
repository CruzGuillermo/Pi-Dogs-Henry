// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getDogName } from "../../Redux/Actions.js";
// import "./SearchBar.css"

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");

//   const handleInput = (e) => {
//     e.preventDefault();
//     setName(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(getDogName(name));
//     setName("");
//   };

//   return (
//     <div className="contenedor">
//       <input
//         type="text"
//         placeholder="nombre..."
//         onChange={(e) => handleInput(e)}
//         value={name}
//         className="Buscador"
//       />
//       <button
//         type="submit"
//         onClick={(e) => handleSubmit(e)}
//         className="btngrad"
//       >
//         Buscar
//       </button>
//     </div>
//   );
// }
