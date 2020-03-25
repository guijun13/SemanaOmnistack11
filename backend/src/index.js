const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //express tranforma do json em algo entendivel para o JS
app.use(routes);

app.listen(3333);