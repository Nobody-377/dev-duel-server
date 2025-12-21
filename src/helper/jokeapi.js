const axios = require('axios');


const apiURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt';

async function getData(req, res) {
    try {
     
        let response = await axios.get(apiURL);
        
      
        console.log(response.data); 
   
       
        res.status(200).json({ joke: response.data }); 
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}

module.exports = { getData };