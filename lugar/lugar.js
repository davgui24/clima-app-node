const axios = require('axios');



const getLugarLatLng = async(direccion) => {
    let encodeURL = encodeURI(JSON.stringify(direccion));

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyBjQABSVm5-I00LBgQ42KKlQo9vGJgH5XA`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hya resultado para la ciudad: ${direccion}`)
    }

    let dir = res.data.results[0].formatted_address;
    let lat = res.data.results[0].geometry.bounds.northeast.lat;
    let lng = res.data.results[0].geometry.bounds.northeast.lng;

    return {
        dir: res.data.results[0].formatted_address,
        lat: res.data.results[0].geometry.bounds.northeast.lat,
        lng: res.data.results[0].geometry.bounds.northeast.lng
    }
}


module.exports = {
    getLugarLatLng
}