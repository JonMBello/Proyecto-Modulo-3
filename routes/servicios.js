// Estructura del CRUD
const router = require('express').Router();
const {
    crearServicio,
    obtenerServicios,
    modificarServicio,
    eliminarServicio
} = require('../controllers/servicios')

router.get('/', obtenerServicios)
router.post('/', crearServicio)
router.put('/:id', modificarServicio)
router.delete('/:id', eliminarServicio)

module.exports = router;