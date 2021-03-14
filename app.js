// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://barberiasUser:71pLi9XF4xWbe4Ri@cluster0.rcwkd.mongodb.net/barberias-api?retryWrites=true&w=majority"
);
mongoose.set("debug", true);

//require("./models/Cita");
//require("./models/Servicio");
require("./models/Barbero");
require("./models/Cliente");
require('./config/passport');
// Aquí se importarán los modelos restantes cuando estén listos

/*********************** Mongoose Configuration *******************************/

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});
