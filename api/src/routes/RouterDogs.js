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
      image,
      createDb
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
        createDb: true
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


router.delete('/:id', async (req, res) => {
  const id = req.params.id 
  try {
    if (id) {
      const deleteDog = await Dog.findOne({
        where: { id: id }
      })
      if (deleteDog) {
        await deleteDog.destroy()
        res.status(200).send('The dog was successfully deleted from existence')
      }
      else res.status(404).send('Dog ID not found')
    } else res.status(400).send("Something went wrong.");
  } catch (e) {
    console.log('error try catch', e);
    res.status(400).send('Dog ID is wrong typed')
  }
})

module.exports = router;
