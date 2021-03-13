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
  console.log("Barberia a modificar: " + req.params.id ) //req.param.id - Mascota en uri

  Barberia.findById(req.params.id).then(barberia => { //Busca la mascota que se recibe como parámetro.

    if (!barberia) { return res.sendStatus(401); }   //Si no se encuentra mascota, retorna estaus 401.---

    let idBarbero=req.barbero.id;                   //User en JWT
    console.log("Barbero que modifica " + idBarbero);
    if( idUsuario == idAnunciante ){
      let nuevaInfo = req.body
      if (typeof nuevaInfo.nombre !== 'undefined')
        mascota.nombre = nuevaInfo.nombre
      if (typeof nuevaInfo.categoria !== 'undefined')
        mascota.categoria = nuevaInfo.categoria
      if (typeof nuevaInfo.fotos !== 'undefined')
        mascota.fotos = nuevaInfo.fotos
      if (typeof nuevaInfo.descripcion !== 'undefined')
        mascota.descripcion = nuevaInfo.descripcion
      if (typeof nuevaInfo.anunciante !== 'undefined')
        mascota.anunciante = nuevaInfo.anunciante
      if (typeof nuevaInfo.ubicacion !== 'undefined')
        mascota.ubicacion = nuevaInfo.ubicacion
      mascota.save().then(updatedMascota => {
        res.status(201).json(updatedMascota.publicData())
      }).catch(next)
    } 
    else{
      return res.sendStatus(401);
    }
  }).catch(next)
}

/*function eliminarMascota(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}*/

function eliminarBarberia(req, res) {
  // únicamente borra a su propio mascota obteniendo el id del token
  Barberia.findById(req.params.id).then(barberia => {

    if (!barberia) { return res.sendStatus(401); }
    
    let idBarbero=req.barbero.id;
    console.log("Barbero que modifica " + idBarbero);
   
    let nombreBarberia = barberia.nombre;
    barberia.deleteOne();
    res.status(200).send(`Barberia ${req.params.id} eliminada. ${nombreBarberia}`);
    
    
  });
  
  /*Mascota.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  crearBarberia,
  obtenerBarberias,
  modificarBarberia,
  eliminarBarberia,
  obtenerMascota
}