const express = require('express');
const route = express.Router();
const getData = require("./helper/jpkeapi.js")

console.log(getData);

route.get('/',getData)


export default route;