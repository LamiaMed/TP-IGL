/***************************EXPOSITION DES SERVICES WEB************** */

var express = require('express');
var app = express();

var controleur = require('./controleur');
app.use('./infoEtudiant', controleur);

module.exports = app;