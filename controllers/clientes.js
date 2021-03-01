const Cliente = require('../models/Cliente')

function crearCliente(req, res) {
  var cliente = new Cliente(req.body)
  res.status(201).send(cliente)
}

function obtenerClientes(req, res) {
  var cliente1 = new Cliente(1, 'El Perro Bermudez', '9511234567', 'calvo1@gmail.com')
  var cliente2 = new Cliente(2, 'Saitama', '9517654321', 'calvo2@gmail.com')
  res.send([cliente1, cliente2])
}

function modificarCliente(req, res) {
  var cliente1 = new Cliente(req.params.id, 'calvo con capa', '9512345678', 'supercalvo@gmail.com')
  var modificaciones = req.body
  cliente1 = { ...cliente1, ...modificaciones }
  res.send(cliente1)
}

function eliminarCliente(req, res) {
  res.status(200).send(`Cliente ${req.params.id} eliminado`);
}

module.exports = {
  crearCliente,
  obtenerClientes,
  modificarCliente,
  eliminarCliente
}