// importamos el modelo de Barberia
const Barberia = require('../models/Barberia')

function crearBarberia(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var barberiaNueva = new Barberia(req.body)
  res.status(201).send(barberiaNueva)
}

function obtenerBarberias(req, res) {
  // Simulando una barberia y respondiendola
  var barberia1 = new Barberia(1 , "Barberia Martinez" , "San andres#265, Valle de San Andres, Apodaca" ,"8125742911", "martinez@barberia.com.mx" , "10am-6pm" , "Josue Martinez" , "Jordan Vitela" , "Corte de cabello-Premium ")
  res.send([barberia1])
}

function modificarBarberia(req, res) {
  // Simulando una barberia previamente existente que el administrador modifica
  var barberia1 = new Barberia(1 , "Barberia Martinez" , "San andres#265, Valle de San Andres, Apodaca" ,"8125742911", "martinez@barberia.com.mx" , "10am-9pm" , "Jonathan Martinez" , "Jordan Vitela" , "Corte de cabello-Premium ")
  var modificaciones = req.body
  barberia1 = { ...barberia1, ...modificaciones }
  res.send(barberia1)
}

function eliminarBarberia(req, res) {
  // Se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`barberia ${req.params.id} eliminada`);
}

// Exportamos las funciones definidas
module.exports = {
  crearBarberia,
  obtenerBarberias,
  modificarBarberia,
  eliminarBarberia
}
