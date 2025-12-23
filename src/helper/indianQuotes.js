// const axios = require('axios');

// const apiURL = 'https://indian-quotes-api.vercel.app/api/quotes/random';

// async function getData1(req, res) {
//     try {
     
//         let response = await axios.get(apiURL);
        
      
//         console.log(response.data); 
   
       
//         res.status(200).json({ quotes: response.data }); 
        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Failed to fetch data" });
//     }
// }

// module.exports = { getData1 };