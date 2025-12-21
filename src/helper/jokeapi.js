const axios = require('axios')
const express = require('express');
const route = express.Router();

async function getData (){
const apiURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
try{
let response = await axios.get(apiURL)
console.log(response);
}
catch(err){
   console.log(err);
   
}
}




module.exports = { getData }