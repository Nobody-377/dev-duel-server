const express = require('express');
const app = express()
const route = express.Router();

import {getData} from './helper/jokeapi.js'

route.get('/',getData)