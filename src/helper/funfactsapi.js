const axios = require('axios');
const apiURL = 'https://world-fun-facts-all-languages-support.p.rapidapi.com/fact.php?lang=en&uuid=df6dae1dba517a24b85a3dccca293eaa';

async function getData3(req, res) {
  try {
    const response = await axios.get(apiURL, {
      headers: {
        'X-RapidApi-Key': '8eaaa97206msh147ebccb58e1310p1f3c50jsnbbe93253381f',
        'X-RapidAPI-Host': 'world-fun-facts-all-languages-support.p.rapidapi.com'
      }
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'API failed' });
  }
}

module.exports = { getData3 };