// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('Welcome to barberías api');
});

router.use('/servicios', require('./servicios'));

/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/servicios' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo servicios.js,
* la función require está importando este archivo */

router.use('/citas', require('./citas'));

// exportamos nuestro nuevo router
module.exports = router;