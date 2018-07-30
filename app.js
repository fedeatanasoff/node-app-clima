const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad",
    demand: true
  }
}).argv;

// const { getLugarLatLon } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

// getLugarLatLon(argv.direccion)
//   .then(respuesta => console.log(respuesta.latitud))
//   .catch(error => console.log("Error: ", error));

getClima(-34.6340099, -58.791382)
  .then(resp => console.log(resp))
  .catch(err => console.log("Error: ", err));
