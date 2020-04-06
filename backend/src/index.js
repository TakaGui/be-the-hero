const express = require('express');
const cors = request('cors')
const routes = require('./routes');

const app = express();

app.cuse(cors());
// Antes das requisições, ir no corpo da requisição e pegar o JSON e converter
// em algo entendível pela alicação
app.use(express.json());
app.use(routes);

app.listen(3333);