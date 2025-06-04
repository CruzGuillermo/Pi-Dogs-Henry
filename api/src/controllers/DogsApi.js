require("dotenv").config();
const { API_KEY } = process.env;

const axios = require("axios");

const DogsApi = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  const infoApi = apiUrl.data.map((el) => {
    const heightAPI = el.height.metric?.split("-") || ["12", "45"];
    const weightAPI = el.weight.metric?.split("-") || ["21", "48"];
    const lifeSpan = el.life_span?.split(" - ") || ["8", "15"];

    return {
      id: el.id,
      name: el.name?.toLowerCase() || "unknown",
      heightMin: parseInt(heightAPI[0]) || 12,
      heightMax: parseInt(heightAPI[1]) || 45,
      weightMin: parseInt(weightAPI[0]) || 21,
      weightMax: parseInt(weightAPI[1]) || 48,
      life_time_min: lifeSpan[0],
      life_time_max: lifeSpan[1]?.split(" ")[0] || "15",
      life_span: el.life_span || "8 - 15 years",
      image:
        el.image?.url ||
        "https://static.nationalgeographic.es/files/styles/image_3200/public/10207.600x450.webp?w=400",
      temperament: el.temperament || "Loyal, Alert, Calm",
      createDb: false,
    };
  });

  return infoApi;
};

module.exports = DogsApi;
