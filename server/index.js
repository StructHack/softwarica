const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

const botrouter = require('./routes/bot')
app.use('/bot',botrouter)



app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})