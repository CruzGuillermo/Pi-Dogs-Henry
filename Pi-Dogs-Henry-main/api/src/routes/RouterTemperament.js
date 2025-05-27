const express = require("express");
const router = express.Router();
const { Temperament } = require("../db");
const axios = require ("axios")

router.get("/", async (req, res) => {
  const infoApi = await await axios.get(`https://api.thedogapi.com/v1/breeds`);
  const temperaments = infoApi.data.map((dog) => dog.temperament)
  .toString() //Devuelve una cadena de caracteres (texto)
  .trim() // eliminar espacios en blanco y tablulaciones
  .split(/\s*,\s*/)
  .sort();//Esto imprime dos líneas; la primera línea imprime la cadena ...original, y la segunda línea imprime el array resultante.
  const temperamentsForDB = temperaments.filter((e) => e);
  const filtradoEach = [...new Set(temperamentsForDB)];
  filtradoEach.forEach((e) => {
    Temperament.findOrCreate({
      where: { name: e },
    });
  });
  const allTemperament = await Temperament.findAll();
  res.send(allTemperament);
});


module.exports = router;
