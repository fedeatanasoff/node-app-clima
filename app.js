const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad",
    demand: true
  }
}).argv;

const axios = require("axios");
// console.log(argv.direccion);
const direccion = encodeURI(argv.direccion);
// console.log(direccion);

axios
  .get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI `
  )
  .then(response => {
    // let data = JSON.stringify(response.data, undefined, 2);
    let data = response.data.results[0];
    let address = data.formatted_address;
    let latitud = data.geometry.location.lat;
    let longitud = data.geometry.location.lng;
    // console.log(address, latitud, longitud);
    console.log(`Direccion: ${address}`);
    console.log(`Latitud: ${latitud}`);
    console.log(`Longitud: ${longitud}`);
  })
  .catch(error => console.log("Error: ", error));
