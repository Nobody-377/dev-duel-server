const express = require('express');
const route = express.Router();
const {getData} = require("../helper/jokeapi")

console.log(getData);

route.get('/',getData)


module.exports = route;