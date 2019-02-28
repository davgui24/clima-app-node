const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

lugar.getLugarLatLng(argv.direccion).then(data => {
    clima.getClima(data.lat, data.lng).then(temp => {
        console.table({ ciudad: data.dir, latitud: data.lat, longitud: data.lng, temperatura: temp });
    });
});