const { Dog, Temperament } = require("../db");

const DogsDb = async () => {
  return await Dog.findAll({
    // le pedimos q además de los datos del dog, me incluya los temperamentos asociados a ese dog
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = DogsDb;
