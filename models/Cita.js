const mongoose = require('mongoose');//Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator
//Definiendo el objeto Barbero con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const CitaSchema = new mongoose.Schema({ 
  numeroCita:{type: Number, required: true},
  cliente:{type: mongoose.Schema.Types.ObjectId, ref:"Cliente"},
  barberia:{type: mongoose.Schema.Types.ObjectId, ref:"Barberia"},
  servicios:{type: Array, required: true},
  fecha:{type: Date, required: true},
  hora:{type: String, required: true}
}, {timestamps: true});  

// usando plugin de validación para que no se repitan correos ni usernames
CitaSchema.plugin(uniqueValidator, { message: "Ya existe" });

/**
* Devuelve la representación de un barbero, sólo datos públicos
*/
CitaSchema.methods.publicData = function(){
  return {
    id:this._id,
    numeroCita:this.numeroCita,
    cliente:this.cliente,
    barberia:this.barberia,
    servicios:this.servicios,
    fecha:this.fecha,
    hora:this.hora
  };
};

//Define el modelo Barbero, utilizando el esquema BarberoSchema.
mongoose.model("Cita", CitaSchema);//Colección en base de datos