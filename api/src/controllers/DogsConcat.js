const DogsApi = require("./DogsApi");
const DogsDb = require("./DogsDb");

const DogsConcat = async () => {
  const infoDataApi = await DogsApi();
  const infoDataDB = await DogsDb();

  const filteredDbDogs = infoDataDB.map((el) => {
    return {
      id: el.id,
      name: el.name.toLowerCase(),
      heightMin: el.heightMin,
      heightMax: el.heightMax,
      weightMin: el.weightMin,
      weightMax: el.weightMax,
      life_span: el.life_span,
      image: el.image
        ? el.image
        : "https://static.nationalgeographic.es/files/styles/image_3200/public/10207.600x450.webp?w=400",
      temperament: el.temperaments.map((e) => e.name).join(", "),
      createDb: true,
    };
  });

  // Evitamos nombres duplicados entre API y DB
  const apiNames = new Set(infoDataApi.map((dog) => dog.name));
  const dbDogsFilteredByName = filteredDbDogs.filter(
    (dog) => !apiNames.has(dog.name)
  );

  return [...infoDataApi, ...dbDogsFilteredByName];
};

module.exports = DogsConcat;
