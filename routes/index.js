// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to BarberiasVIP api');
});

router.use('/barberos', require('./barberos'));
router.use('/citas', require('./citas'));
router.use('/servicios', require('./servicios'));
router.use('/barberias', require('./barberias'));
router.use('/clientes', require('./clientes'));
// exportamos nuestros routers
module.exports = router;

