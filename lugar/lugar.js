const axios = require("axios");

// console.log(direccion);

const getLugarLatLon = async direccion => {
  let URI = encodeURI(direccion);

  let resp = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${URI}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI `
  );

  if (resp.data.status === "ZERO_RESULTS")
    throw new Error("No se ha encontrado una ciudad con ese nombre");

  let data = resp.data.results[0];
  let address = data.formatted_address;
  let latitud = data.geometry.location.lat;
  let longitud = data.geometry.location.lng;

  return {
    address: address,
    latitud: latitud,
    longitud: longitud
  };
};

module.exports = {
  getLugarLatLon: getLugarLatLon
};
