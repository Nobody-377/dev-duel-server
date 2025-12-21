const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express()
const route = express.Router();
const PORT = 3000;


app.use(cors()); 
app.use(express.json());
