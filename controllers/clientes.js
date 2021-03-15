const mongoose = require("mongoose")
const passport = require('passport');
const Cliente = mongoose.model("clientes")

function crearCliente(req, res, next) {
  const body = req.body,
  password = body.password
  delete body.password;
  const cliente = new Cliente(body)
  cliente.crearPassword(password)
  cliente.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

function obtenerClientes(req, res, next) {
  if(req.params.id){
    Cliente.findById(req.params.id).then(cliente => {
	      res.send(cliente)
	    }).catch(next)
  } else {
    Cliente.find().then(cliente=>{
      res.send(cliente)
    }).catch(next)
  }
}

function modificarCliente(req, res,next) {
  Cliente.findByIdAndUpdate(req.params.id, req.body, function(err, postActualizado) {
    if (err) {
      res.sendStatus(401)
      } else {
        res.status(200)
      }
  })
}

function eliminarCliente(req, res) {
  const cliente = Cliente.findById(req.params.id);
  if (cliente === null){
    res.sendStatus(401)
  } else {
    Cliente.remove(cliente).then(user => {
      res.status(200)
    }).catch(err => {
      res.sendStatus(500)
    }).catch(next)
  }
}

module.exports = {
  crearCliente,
  obtenerClientes,
  modificarCliente,
  eliminarCliente
}