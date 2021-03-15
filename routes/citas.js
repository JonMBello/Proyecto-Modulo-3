// Estructura del CRUD
const router = require('express').Router();
const {
    crearCita,
    obtenerCitas,
    obtenerServicioPorLimite,
    obtenerServiciosPorCampos,
    obtenerServiciosPorAtributo,
    modificarCita,
    eliminarCita
} = require('../controllers/citas');
const auth = require('./auth');

router.get('/', auth.requerido, obtenerCitas)
router.get('/limite/:limit', auth.opcional, obtenerServicioPorLimite)
router.get('/campos', auth.opcional, obtenerServiciosPorCampos)
router.get('/atributos', auth.opcional, obtenerServiciosPorAtributo)
router.post('/', auth.requerido, crearCita)
router.put('/:id', auth.requerido, modificarCita)
router.delete('/:id', auth.requerido, eliminarCita)

module.exports = router;