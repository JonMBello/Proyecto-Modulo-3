// Estructura del CRUD
const router = require('express').Router();
const {
    crearCita,
    obtenerCitas,
    modificarCita,
    eliminarCita
} = require('../controllers/citas')

router.get('/', crearCita)
router.post('/', obtenerCitas)
router.put('/:id', modificarCita)
router.delete('/:id', eliminarCita)

module.exports = router;