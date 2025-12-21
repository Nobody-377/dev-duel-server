const {getData} = require("../helper/jokeapi")



route.get('/',getData)


module.exports = route;