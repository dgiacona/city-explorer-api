'use strict'

require('dotenv').config();

const express = require('express');
const app = express();

const getWeather = require('./weather.js');
const getMovies = require('./movie.js');

const cors = require('cors');

app.use(cors());