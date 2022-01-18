const express = require('express');
const app = express();

app.use(express.json());

const contatos = ["Lucas", "Larissa", "Cauê"];

app.get('/',(req, res) => {
    res.send("Olá Mundo");
})

app.get('/contato/:id', (req, res) => {

    const {id} = req.params;
    const {sit} = req.query;

    res.json({
        id: id,
        sit,
        email:"oi@gmail.com"
    });
})

app.post('/contatos', (req, res) => {

    const { nome } = req.body;

    contatos.push(nome);

    return res.json({
        contatos
    })
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})