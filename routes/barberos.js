// Estructura del CRUD
const router = require('express').Router();
const {
    crearBarbero,
    obtenerBarberos
    //modificarBarbero,
    //eliminarBarbero
} = require('../controllers/barberos');
const auth = require('./auth');

router.get('/', auth.requerido, obtenerBarberos)
router.get('/:id', auth.requerido, obtenerBarberos)
router.post('/', crearBarbero)
//router.post('/', IniciarSesion)
//router.put('/:id', auth.requerido, modificarBarbero)
//router.delete('/:id', auth.requerido, eliminarBarbero)

module.exports = router;