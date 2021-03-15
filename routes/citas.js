// Estructura del CRUD
const router = require('express').Router();
const {
    crearCita,
    obtenerCitas,
    modificarCita,
    eliminarCita
} = require('../controllers/citas');
const auth = require('./auth');

router.get('/', auth.requerido, obtenerCitas)
router.post('/', auth.requerido, crearCita)
router.put('/:id', auth.requerido, modificarCita)
router.delete('/:id', auth.requerido, eliminarCita)

module.exports = router;