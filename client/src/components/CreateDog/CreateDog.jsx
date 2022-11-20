import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments, getDogs } from "../../Redux/Actions";
import { validations } from "./validations";
import s from "./CreateDog.module.css";

function CreatedDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperamento = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});

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
    dispatch(getDogs());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    console.log(input);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const existeName = allDogs.filter(
      (e) => e.name.toLowerCase() === input.name.toLowerCase()
    );

    if (existeName.length > 0) {
      return alert(`Ya Existe El Perro ${input.name}`);
    } else {
      if (!Object.keys(input).length || input.temperament.length === 0) {
        alert('Completa los campos marcados con "*"');
      } else if (Object.keys(errors).length) {
        alert("datos incorrectos");
      } else {
        dispatch(postDog(input));
        alert(`El Perro ${input.name} Fue Creado Con Exito`);
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
      }
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
        <div >
          <Link to="/home" className={s.btngrad}>
            Regresar
          </Link>
        </div>
      </header>
      <main className={s.main}>
        <div className={s.formContainer}>
          <div className={s.form}>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                {errors.name && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    {errors.name}
                  </strong>
                )}
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
                {errors.weightMin && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    {errors.weightMin}
                  </strong>
                )}
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
                {errors.weightMax && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    {errors.weightMax}
                  </strong>
                )}
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
                {errors.heightMin && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    {errors.heightMin}
                  </strong>
                )}
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
                {errors.heightMax && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    {errors.heightMax}
                  </strong>
                )}
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
                {errors.life_span && (
                  <strong
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "lighter",
                    }}
                  >
                    {errors.life_span}
                  </strong>
                )}
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
                <select onChange={(e) => handleSelct(e)}>
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
                <input type="submit" value="Crear Perro 🐶" className={s.btngrad} />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreatedDog;
