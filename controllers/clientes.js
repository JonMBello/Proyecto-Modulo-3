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

function iniciarSesion(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: {correo: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generarJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = {
  crearCliente,
  obtenerClientes,
  modificarCliente,
  eliminarCliente,
  iniciarSesion
}