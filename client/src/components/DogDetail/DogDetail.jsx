import React, { useEffect } from "react";
import { getDogById } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./DogDetail.module.css";

function DogDetail() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);
  const params = useParams();

  useEffect(() => {
    dispatch(getDogById(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={s.container}>
      <div className={s.boxCard}>
        <div>
          <Link to="/home">
            <button className={s.btngrad}>⟵ Home</button>
          </Link>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : detail.length > 0 ? (
          detail.map((dog) => (
            <div key={dog.id}>
              <h2 className={s.fontName}>Nombre: {dog.name}</h2>
              <p className={s.id}>Id: {dog.id}</p>
              <img
                src={dog.image}
                alt="Dog img"
                width={300}
                className={s.imgCard}
              />
              <h3 className={s.font}>Peso Minimo: {dog.weightMin} kg</h3>
              <h3 className={s.font}>Peso Maximo: {dog.weightMax} kg</h3>
              <h3 className={s.font}>Altura Minima: {dog.heightMin} Cm</h3>
              <h3 className={s.font}>Altura Maxima: {dog.heightMax} Cm</h3>
              <h3 className={s.font}>Temperamentos: {dog.temperament}</h3>
            </div>
          ))
        ) : (
          "not foun"
        )}
      </div>
    </div>
  );
}
export default DogDetail;
