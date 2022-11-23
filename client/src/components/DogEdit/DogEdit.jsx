import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById, editDog, getTemperaments } from "../../Redux/Actions";
import { useState } from "react";
import s from "./DogEdit.module.css";

function DogEdit() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const allTemperamento = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    temperament: [],
    life_span: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogById(params.id));
  }, [dispatch, params.id]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const result = {};
    result.name = input.name;
    result.weightMin = input.weightMin;
    result.weightMax = input.weightMax;
    result.heightMin = input.heightMin;
    result.temperament = input.temperament;
    result.life_span = input.life_span;
    result.image = input.image;
    dispatch(editDog(result, params.id));
    alert(`El Perro ${input.name} Fue Actualizado Con Exito`);
    setInput({
      name: "",
      weightMin: "",
      weightMax: "",
      heightMin: "",
      heightMax: "",
      temperament: [],
      life_span: "",
      image: "",
    });
    setTimeout(() => {
      history.push("/home");
    }, 3000);
  };
  const handleChange = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  }

  const handleSelct = (e) => {
    if (input.temperament.length <= 4) {
      if (input.temperament === "") setInput({ ...input, temperament: [] });
      if (Object.values(input.temperament).includes(e.target.value)) {
        alert("Temperamento duplicado");
      } else {
        setInput({
          ...input,
          temperament: [...input.temperament, e.target.value],
        });
      }
    } else {
      alert("Maximo 5 temperamentos");
    }
  };
  
  const handleDelete = (e) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((data) => data !== e),
    });
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div>
          <Link to="/home" className={s.btngrad}>
            Regresar
          </Link>
        </div>
      </header>
      <main className={s.main}>
        <div className={s.formContainer}>
          <div className={s.form}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1>Edita tu Perro</h1>
              <div className={s.inputContainer}>
                <label>Nombre*</label>
                <input
                  type="text"
                  placeholder="nombre raza"
                  value={input.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className={s.inputContainer}>
                <label>Peso Minimo*</label>
                <input
                  type="number"
                  value={input.weightMin}
                  name="weightMin"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className={s.inputContainer}>
                <label>Peso Maximo*</label>
                <input
                  type="number"
                  value={input.weightMax}
                  name="weightMax"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className={s.inputContainer}>
                <label>Altura Minima*</label>
                <input
                  type="number"
                  value={input.heightMin}
                  name="heightMin"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className={s.inputContainer}>
                <label>Altura Maxima*</label>
                <input
                  type="number"
                  value={input.heightMax}
                  name="heightMax"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className={s.inputContainer}>
                <label>Años De Vida*</label>
                <input
                  type="text"
                  placeholder="Enter a value"
                  value={input.life_span}
                  name="life_span"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className={s.inputContainer}>
                <label>Imagen(Opcional)</label>
                <input
                  type="url"
                  value={input.image}
                  name="image"
                  onChange={(e) => handleChange(e)}
                  placeholder="Url De Imagen"
                  autoComplete="off"
                />
              </div>

              <div className={s.inputContainer}>
                <label>Temperamentos</label>
                <select onChange={(e)=>handleSelct(e)}>
                  {allTemperamento?.map((e) => {
                    return (
                      <option value={e.name} key={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                {input.temperament?.map((e) => {
                  return (
                    <div className={s.selected} key={e}>
                      <p className={s.p}>{e}</p>
                      <button
                        type="button"
                        key={e}
                        value={e}
                        onClick={() => handleDelete(e)}
                        className={s.btnDelete}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className={s.inputContainer}>
                <input
                  type="submit"
                  value="Editar tu Perro 🐶"
                  className={s.btngrad}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
            }
export default DogEdit;
