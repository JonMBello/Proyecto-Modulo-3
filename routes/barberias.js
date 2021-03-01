// Estructura del CRUD

//Se define que usaremos express con la funcionalidad Router
const router = require('express').Router();
//importamos los metodos que definimos en los controladores
const {
  crearBarberia,
  obtenerBarberias,
  modificarBarberia,
  eliminarBarberia
} = require('../controllers/barberias')


//Se define el metodo http que tendra cada uno de nuestros metodos
router.get('/', obtenerBarberias)
router.post('/', crearBarberia)
router.put('/:id', modificarBarberia)
router.delete('/:id', eliminarBarberia)

//Se exporta router 
module.exports = router;