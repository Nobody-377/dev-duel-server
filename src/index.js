const express = require('express');
const cors = require('cors');
const route=require('./routes/routes')
const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = 3000;


app.use("/api", route)

app.listen(3000,()=>{
    console.log('server started');
    
})




