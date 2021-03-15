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
    barbero.save().then(user => {//Guardando nuevo usuario en MongoDB.
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

function obtenerBarberoPorLimite(req, res, next){
  let limite = req.params.limit;
  limite = Number(limite)
  Barbero.find({}).limit(limite).then(barbero => {
    res.send(barbero)
  }).catch(next)
}

function obtenerBarberosPorCampos(req, res, next){
  let datos = '';
  for(const dato in req.query){
    if(Object.hasOwnProperty.call(req.query, dato)){
      datos = datos + ' ' + req.query[dato];
    }
  }
  Barbero.find({}, datos).then(barbero =>{
    res.send(barbero)
  }).catch(next)
}

function obtenerBarberosPorAtributo(req,res,next){
  if(req.query.nombre){
    Barbero.find({nombre: req.query.nombre}).then(barbero =>{
      res.send(barbero)
    }).catch(next)
  }
  if(req.query.telefono){
    Barbero.find({telefono: req.query.telefono}).then(barbero =>{
      res.send(barbero)
    }).catch(next)
  }
  if(req.query.correo){
    Barbero.find({correo: req.query.correo}).then(barbero =>{
      res.send(barbero)
    }).catch(next)
  }
  if(req.query.genero){
    Barbero.find({genero: req.query.genero}).then(barbero =>{
      res.send(barbero)
    }).catch(next)
  }
  if(req.query.barberia){
    Barbero.find({barberia: req.query.barberia}).then(barbero =>{
      res.send(barbero)
    }).catch(next)
  }
  if(req.query.usuario){
    Barbero.find({usuario: req.query.usuario}).then(barbero =>{
      res.send(barbero)
    }).catch(next)
  }
}

function modificarBarbero(req, res, next) {
  console.log(req.usuario)
  Barbero.findById(req.usuario.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.nombre !== 'undefined')
      user.nombre = nuevaInfo.nombre
    if (typeof nuevaInfo.telefono !== 'undefined')
      user.telefono = nuevaInfo.telefono
    if (typeof nuevaInfo.correo !== 'undefined')
      user.correo = nuevaInfo.correo
    if (typeof nuevaInfo.genero !== 'undefined')
      user.genero = nuevaInfo.genero
    if (typeof nuevaInfo.barberia !== 'undefined')
      user.barberia = nuevaInfo.barberia
    if (typeof nuevaInfo.usuario !== 'undefined')
    user.usuario = nuevaInfo.usuario
    if (typeof nuevaInfo.password !== 'undefined')
      user.crearPassword(nuevaInfo.password)
    user.save().then(updatedUser => { //Guardando barbero modificado en MongoDB.
      res.status(201).json(updatedUser.publicData())
    }).catch(next)
  }).catch(next)
}

function eliminarBarbero(req, res) {
  // únicamente borra a su propio barbero obteniendo el id del token
  Barbero.findOneAndDelete({ _id: req.usuario.id }).then(r => {//Buscando y eliminando barbero en MongoDB.
    res.status(200).send(`Barbero ${req.params.id} eliminado: ${r.usuario}`);
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

// exportamos las funciones definidas
module.exports = {
  crearBarbero,
  obtenerBarberos,
  obtenerBarberoPorLimite,
  obtenerBarberosPorCampos,
  obtenerBarberosPorAtributo,
  modificarBarbero,
  eliminarBarbero,
  iniciarSesion
}