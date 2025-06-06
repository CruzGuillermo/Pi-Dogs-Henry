import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Dogs from "../Dogs/Dogs";
import Loading from "../Loading/Loading";
import {
  getDogs,
  getTemperaments,
  orderByName,
  orderByWeight,
  filterDogTemperaments,
  filterCreated,
} from "../../Redux/Actions.js";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from "../Paginado/Paginado";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import './Home.css';


function Home() {
  const [orden, setOrden] = useState("");
  const allDogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSortWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterDog(e) {
    e.preventDefault();
    dispatch(filterDogTemperaments(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  function handleReset(e) {
    dispatch(getDogs());
    setCurrentPage(1);
  }

  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="contenedorPadre">
    <div className="filterGridContainer">
  <Filter
    temperaments={temperaments}
    handleSort={handleSort}
    handleSortWeight={handleSortWeight}
    handleFilterDog={handleFilterDog}
    handleFilterCreated={handleFilterCreated}
    handleReset={handleReset}
  />
</div>

      <main className="main">
        <div className="cards">
          {loading ? (
            <Loading />
          ) : currentDogs.length > 0 ? (
            currentDogs.map((dog, index) => (
              <Dogs
                key={index}
                id={dog.id}
                name={dog.name}
                image={dog.image}
                temperament={dog.temperament}
                weightMin={dog.weightMin}
                weightMax={dog.weightMax}
              />
            ))
          ) : (
            <Error />
          )}
        </div>
       <div className="paginado">
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
           currentPage={currentPage}  
        />
      </div>
      </main>
    </div>
  );
}

export default Home;
