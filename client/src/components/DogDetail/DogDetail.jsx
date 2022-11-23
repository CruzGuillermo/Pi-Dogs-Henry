import React, { useEffect } from "react";
import { getDogById, deleteDog } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./DogDetail.module.css";

function DogDetail() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const history = useHistory();
  const loading = useSelector((state) => state.loading);
  const params = useParams();

  useEffect(() => {
    dispatch(getDogById(params.id));
  }, [dispatch, params.id]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteDog(params.id));
    alert("Dog eliminado con exito");
    setTimeout(() => {
      history.push("/home");
    }, 3000);
  };
  const handleEditDog = () => {
    history.push(`/${params.id}/edit`);
  };

  console.log(detail, "soy detalle de dogs");
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
              <h4 className={s.font}>Peso Minimo: {dog.weightMin} kg</h4>
              <h4 className={s.font}>Peso Maximo: {dog.weightMax} kg</h4>
              <h4 className={s.font}>Altura Minima: {dog.heightMin} Cm</h4>
              <h4 className={s.font}>Altura Maxima: {dog.heightMax} Cm</h4>
              <h4 className={s.font}>Tiempo de Vida: {dog.life_span}</h4>
              <h4 className={s.font}>Temperamentos: {dog.temperament}</h4>
              <div className={s.divSeparador}>
              {dog.createDb === true ? (
                <button className={s.btnEdit} onClick={handleEditDog}>Editar Dog</button>
              ) : null}
              {dog.createDb === true ? (
                <button
                  className={s.btnDelete}
                  onClick={(e) => handleDelete(e)}
                >
                  Eliminar Dog
                </button>
              ) : null}
              </div>
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
