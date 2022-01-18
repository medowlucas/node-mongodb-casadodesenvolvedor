const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("Olá Mundo");
})

app.get('/contato/:id', (req, res)=>{

    const {id} = req.params;
    const {sit} = req.query;

    res.json({
        id: id,
        sit,
        email:"oi@gmail.com"
    });
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