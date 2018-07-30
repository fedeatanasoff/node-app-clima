const { argv } = require("./config/yargs");

const { getLugarLatLon } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

let getInfo = async direccion => {
  try {
    let coordenadas = await getLugarLatLon(direccion);
    let temp = await getClima(coordenadas.latitud, coordenadas.longitud);

    return `El clima en ${direccion} es de ${temp} ºC`;
  } catch (error) {
    return `No se pudo determinar el clima para ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
