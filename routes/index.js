// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to BarberiasVIP api');
});

router.use('/barberos', require('./barberos'));

/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/barberos' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo barberos.js,
* la función require está importando este archivo */

// exportamos nuestro nuevo router
module.exports = router;