const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad",
    demand: true
  }
}).argv;

const { getLugarLatLon } = require("./lugar/lugar");

getLugarLatLon(argv.direccion)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log("Error: ", error));
