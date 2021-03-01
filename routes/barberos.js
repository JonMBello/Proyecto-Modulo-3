// Estructura del CRUD
const router = require('express').Router();
const {
    crearBarbero,
    obtenerBarberos,
    modificarBarbero,
    eliminarBarbero
} = require('../controllers/barberos')

router.get('/', obtenerBarberos)
router.post('/', crearBarbero)
router.put('/:id', modificarBarbero)
router.delete('/:id', eliminarBarbero)

module.exports = router;