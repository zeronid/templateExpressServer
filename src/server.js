const express = require('express');
const getImages = require('./routes/images/getImages.js');

const app = express()

app.get('/getImages', getImages)

module.exports = app;