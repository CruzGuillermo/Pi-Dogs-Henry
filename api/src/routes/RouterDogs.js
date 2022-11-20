const express = require("express");
const router = express.Router();
const DogsConcat = require("../controllers/DogsConcat");
const { Dog, Temperament } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const DogData = await DogsConcat();
    if (name) {
      const DogFilter = await DogData.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      DogFilter.length
        ? res.status(200).send(DogFilter)
        : res.status(400).send(`Dog ${name} not fount`);
    } else {
      res.status(201).send(DogData);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
  try {
    const DogData = await DogsConcat();
    if (idRaza) {
      const DogFilterID = DogData.filter((dog) => dog.id == idRaza);
      DogFilterID.length
        ? res.status(201).send(DogFilterID)
        : res.status(400).send(`dog id: ${idRaza} not exist`);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  
    const {
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      temperament,
      life_span,
      image
    } = req.body;
    if (!name || !heightMin || !heightMax || !weightMin || !weightMax) return res.status(404).json('Faltan informacon obligatoria'); 
    try {  
    let newDog = await Dog.create({
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image,
      });
      let temperamentNewDog = await Temperament.findAll({
        where: { name: temperament },
      });
      newDog.addTemperament(temperamentNewDog);
      res.status(201).send("Dog created succcessfully!");
  } catch (e) {
    console.log("malió sal el post /dogs:", e);
  }
});

module.exports = router;
