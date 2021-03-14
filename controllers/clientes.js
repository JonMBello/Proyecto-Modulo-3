const mongoose = require("mongoose")
const passport = require('passport');
const Cliente = mongoose.model("clientes")

function crearCliente(req, res, next) {
  const body = req.body,
  password = body.password
  delete body.password;
  const cliente = new Cliente(body)
  cliente.crearPassword(password)
  cliente.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

function obtenerClientes(req, res, next) {
  console.log(req);
  Cliente.findById(req.usuario.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.json(user.publicData());
  }).catch(next);
}

// function modificarCliente(req, res) {
//   var cliente1 = new Cliente(req.params.id, 'calvo con capa', '9512345678', 'supercalvo@gmail.com')
//   var modificaciones = req.body
//   cliente1 = { ...cliente1, ...modificaciones }
//   res.send(cliente1)
// }

// function eliminarCliente(req, res) {
//   res.status(200).send(`Cliente ${req.params.id} eliminado`);
// }

module.exports = {
  crearCliente,
  obtenerClientes
  // modificarCliente,
  // eliminarCliente
}