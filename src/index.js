const express = require('express');
const cors = require('cors');
const route=require('./routes/routes')
const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = 3000;


app.use("/", route)

app.listen(PORT,()=>{
    console.log('server started');
    
})




