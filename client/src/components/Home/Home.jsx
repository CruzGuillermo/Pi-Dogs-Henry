import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Dogs from "../Dogs/Dogs";
import logo from "../image/logo.png";
import Loading from "../Loading/Loading";
import {
  getDogs,
  getTemperaments,
  orderByName,
  orderByWeight,
  filterDogTemperaments,
  filterCreated,
} from "../../Redux/Actions.js";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from "../Paginado/Paginado";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import s from "./Home.module.css";
import Error from "../Error/Error";

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
    <div className={s.contenedorPadre}>
      <header className={s.header}>
        <div className={s.title}>
          <Link to={"/home"}>
            <img alt="logo" src={logo} className={s.logo} />
          </Link>
          <div className={s.search}>
            <SearchBar />
          </div>
          <div>
            <Link to="/CreateDog" className={s.btngrad}>
              <span>CREAR PERRO🐶</span>
            </Link>
          </div>
        </div>
      </header>
      <div className={s.functional}>
        <div className={s.filters}>
          <Filter
            temperaments={temperaments}
            handleSort={handleSort}
            handleSortWeight={handleSortWeight}
            handleFilterDog={handleFilterDog}
            handleFilterCreated={handleFilterCreated}
            handleReset={handleReset}
          />
        </div>
      </div>
      <div className={s.paginado}>
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
      </div>
      <main className={s.main}>
        <div className={s.cards}>
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
              />
            ))
          ) : (
            <Error />
          )}
        </div>
        <div className={s.paginado}>
          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
