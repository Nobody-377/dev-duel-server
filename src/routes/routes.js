const express = require('express');
const route = express.Router();





// const {getData} = require("../helper/jokeapi");
// const { getData1 } = require('../helper/indianQuotes');
// const { getData2 } = require('../helper/animalsapi');
const { getData3 } = require('../helper/funfactsapi');

// console.log(getData);
// console.log(getData1)
// console.log(getData2)
console.log(getData3)

// route.get('/',getData)
// route.get('/',getData1)
// route.get('/',getData2)
route.get('/',getData3)



module.exports = route;









