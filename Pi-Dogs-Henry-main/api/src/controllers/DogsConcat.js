const DogsApi = require("./DogsApi")
const DogsDb = require("./DogsDb")

const DogsConcat = async () => {
    const infoDataApi = await DogsApi()
    let infoDataDB = await DogsDb()
    infoDataDB = await infoDataDB.map((el) => {
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
        temperament: el.temperaments.map(e => {
          return e.name
        }).join(", "),
        createDb: el.createDb === false ? false : true 
      };
    });
    const DbConcatApi = infoDataApi.concat(infoDataDB)
    return DbConcatApi
  }

  module.exports = DogsConcat