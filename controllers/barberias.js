// importamos el modelo de Barberia

const mongoose = require('mongoose')
const Barberia = mongoose.model('Barberia')


function crearBarberia(req, res, next) {
  var barberia = new Barberia(req.body)
  barberia.save().then(barberia => {
    res.status(201).send(barberia)
  }).catch(next)
}

function obtenerBarberias(req, res, next) {
  if(req.params.id){
    Barberia.findById(req.params.id).then(barberia => {
	      res.send(barberia)
	    }).catch(next)
      
  } else {
    Barberia.find().then(barberia=>{
      res.send(barberia)
    }).catch(next)
  }
}

function obtenerBarberiasPorLimite(req, res, next){
  let limite = req.params.limit;
  limite = Number(limite)
  Barberia.find({}).limit(limite).then(barberia => {
    res.send(barberia)
  }).catch(next)
}

function obtenerBarberiasPorCampos(req, res, next){
  let datos = ''
  for(const dato in req.query){
    if(Object.hasOwnProperty.call(req.query, dato)){
      datos = datos + ' ' + req.query[dato];
    }
  }
  Barberia.find({}, datos).then(barberia =>{
    res.send(barberia)
  }).catch(next)
}

function obtenerBarberiasPorAtributo(req,res,next){
  if(req.query.nombre){
    Barberia.find({nombre: req.query.nombre}).then(barberia =>{
      res.send(barberia)
    }).catch(next)
  }
  if(req.query.direccion){
    Barberia.find({direccion: req.query.direccion}).then(barberia =>{
      res.send(barberia)
    }).catch(next)
  }
  if(req.query.telefono){
    console.log(req.query.telefono)
    Barberia.find({telefono: req.body.telefono}).then(barberia =>{
      res.send(barberia)
    }).catch(next)
  }
  if(req.query.correo){
    Barberia.find({correo: req.query.correo}).then(barberia =>{
      res.send(barberia)
    }).catch(next)
  }
  if(req.query.horario){
    Barberia.find({horario: req.query.horario}).then(barberia =>{
      res.send(barberia)
    }).catch(next)
  }
  if(req.query.barberoEncargado){
    Barberia.find({horario: req.query.barberoEncargado}).then(barberia =>{
      res.send(barberia)
    }).catch(next)
  }
}



function modificarBarberia(req, res, next) {
  console.log(req.params.id)
  Barberia.findById(req.params.id).then(barberia => {
    if (!barberia) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.nombre !== 'undefined')
      barberia.nombre = nuevaInfo.nombre
    if (typeof nuevaInfo.direccion !== 'undefined')
      barberia.direccion = nuevaInfo.direccion
    if (typeof nuevaInfo.telefono !== 'undefined')
      barberia.telefono = nuevaInfo.telefono
    if (typeof nuevaInfo.correo !== 'undefined')
      barberia.correo = nuevaInfo.correo
    if (typeof nuevaInfo.horario !== 'undefined')
      barberia.horario = nuevaInfo.horario
      if (typeof nuevaInfo.barberoEncargado !== 'undefined')
      barberia.barberoEncargado = nuevaInfo.barberoEncargado
    barberia.save().then(barberiaActualizada => {                                   //Guardando barberia modificada en MongoDB.
      res.status(201).json(barberiaActualizada.publicData())
    }).catch(next)
  }).catch(next)
}


  function eliminarBarberia(req, res) {
    Barberia.findOneAndDelete({ _id: req.params.id }).then(r => {         //Buscando y eliminando barberua en MongoDB.
      res.status(200).send(`Barberia ${req.params.id} eliminado: ${r.nombre}`);
    })
  }


module.exports = {
  crearBarberia,
  obtenerBarberias,
  obtenerBarberiasPorLimite,
  obtenerBarberiasPorCampos,
  obtenerBarberiasPorAtributo,
  modificarBarberia,
  eliminarBarberia,
}