const Servicio = require('../models/Servicio');

function crearServicio(req, res) {
    // Instanciaremos un nuevo Servicio utilizando la clase Servicio
    var servicio = new Servicio(req.body);
    res.status(201).send(servicio);
}

function obtenerServicios(req, res) {
    // Simulando dos servicios y respondiendolos
    var servicio1 = new Servicio(1, 'Corte de caballero', 'Corte de cabello para caballero', 150);
    var servicio2 = new Servicio(2, 'Corte de dama', 'Corte de cabello para dama', 200);
    res.send([servicio1, servicio2]);
}

function modificarServicio(req, res) {
    // simulando un servicio previamente existente que el cliente modifica
    var servicio1 = new Servicio(req.params.id, 'Corte de caballero', 'Corte de cabello para caballero', 150);
    var modificaciones = req.body;
    servicio1 = { ...servicio1, ...modificaciones };
    res.send(servicio1);
}

function eliminarServicio(req, res) {
    // se simula una eliminación de servicio, regresando un 200
    res.status(200).send(`Servicio ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearServicio,
    obtenerServicios,
    modificarServicio,
    eliminarServicio
}