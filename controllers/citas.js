const mongoose = require("mongoose");
const Cita = mongoose.model("Cita");

function crearCita(req, res, next) {
    // Instanciaremos un nuevo Cita utilizando la clase Cita
    var cita = new Cita(req.body)
    cita.save().then(cita => {
        res.status(201).send(cita)
    }).catch(next)
}

function obtenerCitas(req, res, next) {
    if(req.params.id){
        Cita.findById(req.params.id).then(cita => {
            res.send(cita)
        }).catch(next)
    } else {
        Cita.find().then(cita=>{
          res.send(cita)
        }).catch(next)
    }
}

function modificarCita(req, res, next) {
    Cita.findById(req.params.id).then(cita => {
        if (!cita) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.numeroCita !== 'undefined')
          cita.numeroCita = nuevaInfo.numeroCita
        if (typeof nuevaInfo.cliente !== 'undefined')
          cita.cliente = nuevaInfo.cliente
        if (typeof nuevaInfo.barberia !== 'undefined')
          cita.barberia = nuevaInfo.barberia
        if (typeof nuevaInfo.servicios !== 'undefined')
          cita.servicios = nuevaInfo.servicios
        if (typeof nuevaInfo.fecha !== 'undefined')
          cita.fecha = nuevaInfo.fecha
        if (typeof nuevaInfo.hora !== 'undefined')
          cita.hora = nuevaInfo.hora
        cita.save().then(updatedCita => { //Guardando cita modificado en MongoDB.
          res.status(201).json(updatedCita.publicData())
        }).catch(next)
      }).catch(next)
}

function eliminarCita(req, res) {
    Cita.findOneAndDelete({ _id: req.params.id }).then(s => {//Buscando y eliminando cita en MongoDB.
        res.status(200).send(`Cita ${req.params.id} eliminado.`);
    })
}

// exportamos las funciones definidas
module.exports = {
    crearCita,
    obtenerCitas,
    modificarCita,
    eliminarCita
}