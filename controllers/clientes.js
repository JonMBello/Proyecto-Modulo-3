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

function obtenerClientePorLimite(req, res, next){
  let limite = req.params.limit;
  limite = Number(limite)
  Cliente.find({}).limit(limite).then(cliente => {
    res.send(cliente)
  }).catch(next)
}

function obtenerClientesPorCampos(req, res, next){
  let datos = '';
  for(const dato in req.query){
    if(Object.hasOwnProperty.call(req.query, dato)){
      datos = datos + ' ' + req.query[dato];
    }
  }
  Cliente.find({}, datos).then(cliente =>{
    res.send(cliente)
  }).catch(next)
}

function obtenerClientesPorAtributo(req,res,next){
  if(req.query.nombre){
    Cliente.find({nombre: req.query.nombre}).then(cliente =>{
      res.send(cliente)
    }).catch(next)
  }
  if(req.query.telefono){
    Cliente.find({telefono: req.query.telefono}).then(cliente =>{
      res.send(cliente)
    }).catch(next)
  }
  if(req.query.correo){
    Cliente.find({correo: req.query.correo}).then(cliente =>{
      res.send(cliente)
    }).catch(next)
  }
  if(req.query.genero){
    Cliente.find({genero: req.query.genero}).then(cliente =>{
      res.send(cliente)
    }).catch(next)
  }
  if(req.query.barberia){
    Cliente.find({barberia: req.query.barberia}).then(cliente =>{
      res.send(cliente)
    }).catch(next)
  }
  if(req.query.usuario){
    Cliente.find({usuario: req.query.usuario}).then(cliente =>{
      res.send(cliente)
    }).catch(next)
  }
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
  obtenerClientePorLimite,
  obtenerClientesPorCampos,
  obtenerClientesPorAtributo,
  modificarCliente,
  eliminarCliente,
  iniciarSesion
}