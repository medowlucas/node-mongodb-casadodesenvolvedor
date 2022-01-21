const express = require('express');
const app = express();

app.use(express.json());

const contatos = ["Lucas", "Larissa", "Cauê"];

app.get('/',(req, res) => {
    res.send("Olá Mundo");
})

app.get('/contatos/', (req, res) => {

    // const {id} = req.params;
    // const {sit} = req.query;

    // res.json({
    //     id,
    //     sit,
    //     email:"oi@gmail.com"
    // });
    res.json({
        contatos
    })
})

app.post('/contatos', (req, res) => {

    const { nome } = req.body;

    contatos.push(nome);

    return res.json({
        contatos
    })
})

app.put("/contato/:id", (req, res)=>{

    const { id } = req.params;
    const { nome } = req.body;

    contatos[id] = nome;

    return res.json(contatos);
})

app.delete("/contato/:id", (req, res) => {
    const { id } = req.params;

    contatos.splice(id, 1);

    res.json(contatos);
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})