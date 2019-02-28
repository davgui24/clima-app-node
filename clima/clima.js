const axios = require('axios');

const getClima = async(lat, lng) => {


    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=836b964adf2b7b12017dc989a899d8b2`)

    return res.data.main.temp;
}

module.exports = {
    getClima
}