/*  Archivo controllers/barberos.js
 */
const mongoose = require("mongoose")
const Barbero = mongoose.model("barberos")
const passport = require('passport');

function crearBarbero(req, res, next) {
    const body = req.body,
    password = body.password
    delete body.password;
    const barbero = new Barbero(body)
    barbero.crearPassword(password)
    barbero.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
      return res.status(201).json(user.toAuthJSON())
    }).catch(next)
}

function obtenerBarberos(req, res, next) {
  console.log(req);
  Barbero.findById(req.usuario.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.json(user.publicData());
  }).catch(next);
}

// function modificarBarbero(req, res) {
//   // simulando un barbero previamente existente que el cliente modifica
//   var barbero1 = new Barbero(req.params.id, 'Leonardo Betancourt', '442 341 7373', 'leo@gmail.com')
//   var modificaciones = req.body
//   barbero1 = { ...barbero1, ...modificaciones }
//   res.send(barbero1)
// }

// function eliminarBarbero(req, res) {
//   // se simula una eliminación de barbero, regresando un 200
//   res.status(200).send(`Barbero ${req.params.id} eliminado`);
// }

// exportamos las funciones definidas
module.exports = {
  crearBarbero,
  obtenerBarberos,
  // modificarBarbero,
  // eliminarBarbero
}

//Terminar controladores
//Login (Login de barberos)
//Exportar las funciones
//Routes/barberos Activar las rutas
//Routes/index Activar todas las rutas
//Archivo app.js Agregar los modelos
