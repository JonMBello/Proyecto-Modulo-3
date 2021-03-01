// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to BarberiasVIP api');
});

router.use('/barberos', require('./barberos'));
router.use('/clientes', require('./clientes'));
router.use('/citas', require('./citas'));
router.use('/servicios', require('./servicios'));

// exportamos nuestro nuevo router
module.exports = router;