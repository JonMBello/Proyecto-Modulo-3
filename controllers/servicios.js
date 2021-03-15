const mongoose = require("mongoose");
const Servicio = mongoose.model("servicios");

function crearServicio(req, res, next) {
    // Instanciaremos un nuevo Servicio utilizando la clase Servicio
    var servicio = new Servicio(req.body)
    servicio.save().then(servicio => {
        res.status(201).send(servicio)
    }).catch(next)
}

function obtenerServicios(req, res, next) {
    if(req.params.id){
        Servicio.findById(req.params.id).then(servicio => {
            res.send(servicio)
        }).catch(next)
    } else {
        Servicio.find().then(servicio=>{
          res.send(servicio)
        }).catch(next)
    }
}

function modificarServicio(req, res, next) {
    Servicio.findById(req.params.id).then(servicio => {
        if (!servicio) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.nombre !== 'undefined')
          servicio.nombre = nuevaInfo.nombre
        if (typeof nuevaInfo.descripcion !== 'undefined')
          servicio.descripcion = nuevaInfo.descripcion
        if (typeof nuevaInfo.barberia !== 'undefined')
          servicio.barberia = nuevaInfo.barberia
        if (typeof nuevaInfo.precio !== 'undefined')
          servicio.precio = nuevaInfo.precio
        servicio.save().then(updatedServicio => { //Guardando servicio modificado en MongoDB.
          res.status(201).json(updatedServicio.publicData())
        }).catch(next)
      }).catch(next)
}

function eliminarServicio(req, res) {
    Servicio.findOneAndDelete({ _id: req.params.id }).then(s => {//Buscando y eliminando servicio en MongoDB.
        res.status(200).send(`Servicio ${req.params.id} eliminado: ${s.nombre}`);
    })
}

// exportamos las funciones definidas
module.exports = {
    crearServicio,
    obtenerServicios,
    modificarServicio,
    eliminarServicio
}