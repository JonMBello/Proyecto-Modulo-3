// Estructura del CRUD
const router = require('express').Router();
const {
    crearServicio,
    obtenerServicios,
    modificarServicio,
    eliminarServicio
} = require('../controllers/servicios')

router.get('/', crearServicio)
router.post('/', obtenerServicios)
router.put('/:id', modificarServicio)
router.delete('/:id', eliminarServicio)

module.exports = router;