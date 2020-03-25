const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);

//Listagem das ONGS
routes.get('/ongs', OngController.index);

//Cadastro das ONGS
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//Criar os casos/incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
//Deleta um caso dependendo do seu 'id'
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;