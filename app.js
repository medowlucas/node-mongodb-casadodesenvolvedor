const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("Olá Mundo!");
})

const PORT = 8080;
app.listen(PORT, () => {


    console.log(`App running in port ${PORT}`)
})