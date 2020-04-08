const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // Permite aplicações front end de usar esse back end
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log('Rodando o Servidor!');
});
