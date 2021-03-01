const Cita = require('../models/Cita');

function crearCita(req, res) {
    // Instanciaremos una nueva Cita utilizando la clase Cita
    var cita = new Cita(req.body);
    res.status(201).send(cita);
}

function obtenerCitas(req, res) {
    // Simulando dos citas y respondiendolas
    var cita1 = new Cita(1, 1, 101, 105, 1, '14-12-2021', '12:00');
    var cita2 = new Cita(2, 1, 102, 125, 2, '11-08-2021', '14:00');
    res.send([cita1, cita2]);
}

function modificarCita(req, res) {
    // Simulando una cita previamente existente que el cliente modifica
    var cita1 = new Cita(req.params.id, 1, 101, 105, 1, '14-12-2021', '12:00');
    var modificaciones = req.body;
    cita1 = { ...cita1, ...modificaciones };
    res.send(cita1);
}

function eliminarCita(req, res) {
    // se simula una eliminación de cita, regresando un 200
    res.status(200).send(`Cita ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearCita,
    obtenerCitas,
    modificarCita,
    eliminarCita
}