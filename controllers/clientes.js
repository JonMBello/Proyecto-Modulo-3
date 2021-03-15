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
        res.status(200).json(postActualizado)
      }
  })
}

function eliminarCliente(req, res, next) {
  Cliente.findOneAndDelete({_id: req.params.id}).then(r => {
    res.status(200).send(`Cliente ${req.params.id} eliminado ${r.usuario}`);
  })
}

module.exports = {
  crearCliente,
  obtenerClientes,
  modificarCliente,
  eliminarCliente
}