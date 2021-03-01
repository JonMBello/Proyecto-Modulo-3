// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to barberia api');
});

router.use('/barberias', require('./barberias'));
// exportamos nuestro nuevo router
module.exports = router;

