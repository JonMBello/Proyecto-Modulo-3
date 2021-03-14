// importamos el modelo de Barberia

const mongoose = require('mongoose')
const Barberia = mongoose.model('Barberia')



function crearBarberia(req, res, next) {
  var barberia = new Barberia(req.body)
  Barberia.save().then(barberia => {
    res.status(201).send(barberia)
  }).catch(next)
}

/*function obtenerMascotas(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var mascota1 = new Mascota(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var mascota2 = new Mascota(1, 'Tito', 'Tortuga', 'https://img.culturacolectiva.com/featured/2019/02/27/1551305058738/tortugas-japonesas-se-vuelven-plaga-en-mexico-high.png','verde','1','CDMX');
  res.send([mascota1, mascota2])
}*/ 

function obtenerBarberias(req, res, next) {
  if(req.params.id){
    Barberia.findById(req.params.id).then(barberia => {
	      res.send(barberia)
	    }).catch(next)
  } else {
    Barberia.find().then(barberia=>{
      res.send(barberia)
    }).catch(next)
  }
}



function modificarBarberia(req, res, next) {
  console.log(req.params.id)
  Usuario.findById(req.params.id).then(barberia => {
    if (!barberia) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.nombre !== 'undefined')
      barberia.nombre = nuevaInfo.nombre
    if (typeof nuevaInfo.direccion !== 'undefined')
      barberia.direccion = nuevaInfo.direccion
    if (typeof nuevaInfo.foto !== 'undefined')
      barberia.telefono = nuevaInfo.telefono
    if (typeof nuevaInfo.ubicacion !== 'undefined')
      barberia.correo = nuevaInfo.correo
    if (typeof nuevaInfo.telefono !== 'undefined')
      barberia.horario = nuevaInfo.horario
      if (typeof nuevaInfo.barberoEncargado !== 'undefined')
      barberia.barberoEncargado = nuevaInfo.barberoEncargado
    barberia.save().then(barberiaActualizada => {                                   //Guardando usuario modificado en MongoDB.
      res.status(201).json(barberiaActualizada.publicData())
    }).catch(next)
  }).catch(next)
}

/*function eliminarMascota(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}*/


  function eliminarBarberia(req, res) {
    // únicamente borra a su propio usuario obteniendo el id del token
    Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
      res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
    })
  }

  
  /*Mascota.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  crearBarberia,
  obtenerBarberias,
  modificarBarberia,
  eliminarBarberia,
}