const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("Olá Mundo 2");
})

app.get('/contato', (req, res)=>{
    res.send("Página de contato 4");
})

app.get('/sobre', (req, res)=>{
    res.send("Página de sobre 4");
})

app.get('/mensagem', (req, res)=>{
    res.send("Página de mensagem 4");
})

const PORT = 8080;
app.listen(PORT, () => {


    console.log(`App running in port ${PORT}`)
})