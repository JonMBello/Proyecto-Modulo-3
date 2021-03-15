// Estructura del CRUD
const router = require('express').Router();
const {
    crearCliente,
    obtenerClientes,
    obtenerClientePorLimite,
    obtenerClientesPorCampos,
    obtenerClientesPorAtributo,
    modificarCliente,
    eliminarCliente,
    iniciarSesion
} = require('../controllers/clientes')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerClientes)
router.get('/:id', auth.requerido, obtenerClientes)
router.get('/limite/:limit', auth.requerido, obtenerClientePorLimite)
router.get('/Campos', auth.requerido, obtenerClientesPorCampos)
router.get('/atributos', auth.requerido, obtenerClientesPorAtributo)
router.post('/', crearCliente)
router.put('/:id', auth.requerido, modificarCliente)
router.delete('/:id', auth.requerido, eliminarCliente)
router.post('/login', iniciarSesion)

module.exports = router;