// Estructura del CRUD

//Se define que usaremos express con la funcionalidad Router
const router = require('express').Router();
//importamos los metodos que definimos en los controladores
const {
  crearBarberia,
  obtenerBarberias,
  modificarBarberia,
  eliminarBarberia,
  obtenerBarberiasPorAtributo,
  obtenerBarberiasPorCampos,
  obtenerBarberiasPorLimite
} = require('../controllers/barberias')


//Se define el metodo http que tendra cada uno de nuestros metodos
router.get('/', obtenerBarberias)
router.get('/:id', obtenerBarberias)
router.get('/limite/:limit', obtenerBarberiasPorLimite)
router.get('/buscarCampos?nombre',obtenerBarberiasPorCampos)
router.get('/buscarNombre/:nombre/:direccion',obtenerBarberiasPorAtributo)
router.get('/buscarDireccion/:direccion',obtenerBarberiasPorAtributo)
router.get('/buscarTelefono/:telefono',obtenerBarberiasPorAtributo)
router.get('/buscarCorreo/:correo',obtenerBarberiasPorAtributo)
router.get('/buscarHorario/:horario',obtenerBarberiasPorAtributo)
router.get('/buscarEncargado/:barberoEncargado',obtenerBarberiasPorAtributo)
router.post('/', crearBarberia)
router.put('/:id', modificarBarberia)
router.delete('/:id', eliminarBarberia)

//Se exporta router 
module.exports = router;