// Estructura del CRUD
const router = require('express').Router();
const {
    crearServicio,
    obtenerServicios,
    modificarServicio,
    eliminarServicio
} = require('../controllers/servicios');
const auth = require('./auth');

router.get('/', auth.opcional, obtenerServicios)
router.post('/', auth.requerido, crearServicio)
router.put('/:id', auth.requerido, modificarServicio)
router.delete('/:id', auth.requerido, eliminarServicio)

module.exports = router;