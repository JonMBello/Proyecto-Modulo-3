// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to BarberiasVIP api');
});

router.use('/barberos', require('./barberos'));
router.use('/clientes', require('./clientes'));

// exportamos nuestro nuevo router
module.exports = router;