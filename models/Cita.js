const mongoose = require('mongoose');//Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator");
//Definiendo el objeto UsuarioSchema con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const CitaSchema = new mongoose.Schema({     
  _id: {
    Type: Number,
    unique:true, //este campo no se puede repetir
    required: [true, "no puede estar vacío"],
    index: true,
  },
  numeroCita: {Type: Number, required: true},
  cliente: {Type: Number, required: true},
  barberia: {Type: Number, required: true}, 
  servicios: {Type: Array, required: true},
  fecha: {Type: Date, required: true},
  hora: {Type: String, required: true}
}, { timestamps: true });  
CitaSchema.plugin(uniqueValidator, { message: "Ya existe" }); 
CitaSchema.methods.publicData = function(){
  return {
    id: this._id,
    numeroCita: this.numeroCita,
    cliente: this.cliente,
    barberia: this.barberia,
    servicios: this.servicios,
    fecha: this.fecha,
    hora: this.hora
  };
};
//Define el modelo Usuario, utilizando el esquema UsuarioSchema.
mongoose.model("Cita", CitaSchema); //Colección en base de datos