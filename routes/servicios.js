// Estructura del CRUD
const router = require('express').Router();
const {
    crearServicio,
    obtenerServicios,
    obtenerServicioPorLimite,
    obtenerServiciosPorCampos,
    obtenerServiciosPorAtributo,
    modificarServicio,
    eliminarServicio
} = require('../controllers/servicios');
const auth = require('./auth');

router.get('/', auth.opcional, obtenerServicios)
router.get('/limite/:limit', auth.opcional, obtenerServicioPorLimite)
router.get('/campos', auth.opcional, obtenerServiciosPorCampos)
router.get('/atributos', auth.opcional, obtenerServiciosPorAtributo)
router.post('/', auth.requerido, crearServicio)
router.put('/:id', auth.requerido, modificarServicio)
router.delete('/:id', auth.requerido, eliminarServicio)

module.exports = router;