const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json({ limit: '5mb'}))
app.use(bodyParser.urlencoded({extended: false}))

require('./route/clienteRoute')(app)

app.listen(3000, () => {
    console.log("aplicação rodando na porta 3000");
});