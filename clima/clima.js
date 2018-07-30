const axios = require("axios");

let API_KEY = "43dae1ec84f62d8c3c2edc4d591c9217";
let unidad_metrica = "&units=metric";

let getClima = async (lat, lng) => {
  let resp = await axios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}${unidad_metrica}&appid=${API_KEY}`
  );

  if (resp.data.cod != 200) {
    throw new Error("ocurrio un error, intente nuevamente");
  }

  let temp = resp.data.main.temp;

  return resp.data;
};

module.exports = {
  getClima
};
