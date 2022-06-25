'use strict'

const axios = require('axios');

async function getWeather ({lat, lon, cityName}) {
  try {
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&days=3&lat=${lat}&lon=${lon}&units=I`;

    let cityWeather = await axios.get(url);
    let selectedCity = cityWeather.data.data.map(dailyWeather => {
      return new Forcast(dailyWeather);
    });
    return selectedCity;
  }catch (error){
    console.log(error.message)
  }
}

class Forcast {
  constructor(cityWeather) {
    this.date = cityWeather.datetime;
    this.description = cityWeather.weather.description;
    this.temp = cityWeather.temp;
    this.min_temp = cityWeather.min_temp;
    this.max_temp = cityWeather.max_temp;
    console.log(cityWeather);
  }
}

module.exports = getWeather;



//Starter code for weather.js
// let cache = require('./cache.js');

// module.exports = getWeather;

// function getWeather(latitude, longitude) {
//   const key = 'weather-' + latitude + longitude;
//   const url = `http://api.weatherbit.io/v2.0/forecast/daily/?key=${WEATHER_API_KEY}&lang=en&lat=${lat}&lon=${lon}&days=5`;

//   if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
//     console.log('Cache hit');
//   } else {
//     console.log('Cache miss');
//     cache[key] = {};
//     cache[key].timestamp = Date.now();
//     cache[key].data = axios.get(url)
//     .then(response => parseWeather(response.data));
//   }
  
//   return cache[key].data;
// }

// function parseWeather(weatherData) {
//   try {
//     const weatherSummaries = weatherData.data.map(day => {
//       return new Weather(day);
//     });
//     return Promise.resolve(weatherSummaries);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// class Weather {
//   constructor(day) {
//     this.forecast = day.weather.description;
//     this.time = day.datetime;
//   }
// }