/*  Archivo controllers/barberos.js
 *  Simulando la respuesta de objetos Barbero
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de barberos
const Barbero = require('../models/Barbero')

function crearBarbero(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase barbero
  var barbero = new Barbero(req.body)
  res.status(201).send(barbero)
}

function obtenerBarberos(req, res) {
  // Simulando dos barberos y respondiendolos
  var barbero1 = new Barbero(1, 'Leonardo Betancourt', '442 341 7373', 'leo@gmail.com')
  var barbero2 = new Barbero(2, 'Felix Kjellberg', '552 228 5440', 'felix@gmail.com')
  res.send([barbero1, barbero2])
}

function modificarBarbero(req, res) {
  // simulando un barbero previamente existente que el cliente modifica
  var barbero1 = new Barbero(req.params.id, 'Leonardo Betancourt', '442 341 7373', 'leo@gmail.com')
  var modificaciones = req.body
  barbero1 = { ...barbero1, ...modificaciones }
  res.send(barbero1)
}

function eliminarBarbero(req, res) {
  // se simula una eliminación de barbero, regresando un 200
  res.status(200).send(`Barbero ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearBarbero,
  obtenerBarberos,
  modificarBarbero,
  eliminarBarbero
}