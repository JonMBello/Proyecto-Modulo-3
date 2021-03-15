// Estructura del CRUD
const router = require('express').Router();
const {
    crearCliente,
    obtenerClientes,
    modificarCliente,
    eliminarCliente,
    iniciarSesion
} = require('../controllers/clientes')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerClientes)
router.get('/:id', auth.requerido, obtenerClientes)
router.post('/', crearCliente)
router.put('/:id', modificarCliente)
router.delete('/:id', eliminarCliente)
router.post('/login', iniciarSesion)

module.exports = router;