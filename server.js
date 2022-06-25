'use strict'

const dotenv = require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const getWeather = require('./weather.js');
const getMOvies = require('./movie.js');



const app = express();
app.use(cors());

const PORT= process.env.PORT || 3002;

async function handleWeather (req, res) {
  let searchQueryCity = req.searchQueryCity;
  const {lat, lon} = req.query
  try {
    let reponse = await getWeather({lat,lon});
    res.send(response);
  }catch (error){
    console.log(error);
  }
}

async function getMovies (req, res) {
  let searchQueryCity = req.query.movieQueryCity;
  try {
    let reponse = await getMovies(movieQueryCity);
    res.send(response);
  }catch (error){
    console.log(error);
  }
}

app.get('/', (reg, res) => {
  res.status(200).send('Hello there!');
});

app.get('*', (reg, res) => {
  res.status(404).send('This is not what you are looking for');
})

app.get('/weather', handleWeather);

app.get('/movies', getMovies)


app.use((error, req, res, next) => {
  console.log(error.message);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))



//Starter Code for Server.js

// require('dotenv');
// const express = require('express');
// const cors = require('cors');

// const weather = require('./modules/weather.js');
// const app = express();

// app.get('/weather', weatherHandler);

// function weatherHandler(request, response) {
//   const { lat, lon } = request.query;
//   weather(lat, lon)
//   .then(summaries => response.send(summaries))
//   .catch((error) => {
//     console.error(error);
//     response.status(200).send('Sorry. Something went wrong!')
//   });
// }  