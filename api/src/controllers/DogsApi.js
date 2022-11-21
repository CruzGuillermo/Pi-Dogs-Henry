require("dotenv").config();
const { URL_API, API_KEY } = process.env;
const axios = require("axios");

const DogsApi = async () => {
  const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  const infoApi = await apiUrl.data.map((el) => {
    const heightAPI = el.height.metric.split("-");
    const weightAPI = el.weight.metric.split("-");
    return {
      id: el.id,
      name: el.name.toLowerCase(),
      heightMin: parseInt(heightAPI[0]) ? parseInt(heightAPI[0]) : 12,
      heightMax: parseInt(heightAPI[1]) ? parseInt(heightAPI[1]) : 45,
      weightMin: parseInt(weightAPI[0]) ? parseInt(weightAPI[0]) : 21,
      weightMax: parseInt(weightAPI[1]) ? parseInt(weightAPI[1]) : 48,
      life_span: el.life_span,
      image: el.image.url
        ? el.image.url
        : "https://static.nationalgeographic.es/files/styles/image_3200/public/10207.600x450.webp?w=400",
      temperament: el.temperament ? el.temperament : 'Loyal, Alert, Calm',
      createDb: false
    };
  });
  return infoApi;
};

module.exports = DogsApi;
