// Barberia.js
/** Clase que representa una barberia */

const mongoose = require('mongoose');//Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator");
//Definiendo el objeto UsuarioSchema con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const BarberiaSchema = new mongoose.Schema({     
  nombre: {
    type: String, 
    required: true, 
    index:true},
  direccion: {
    type: String,
    required: true},
  telefono: {
    type: String,
    unique:true, 
    required: true}, 
  correo: {
    type: String, 
    unique:true,
    required: true},
  horario: {
    inicio:{
      type:String, 
      required:true},
    cierre:{
      type:String, 
      required:true},
  },
  barberoEncargado: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'barberos'},
}, { timestamps: true });  

//Define el modelo Usuario, utilizando el esquema UsuarioSchema.
BarberiaSchema.plugin(uniqueValidator, { message: "Ya existe" }); 


BarberiaSchema.methods.publicData = function(){
  return {
    id: this._id,
    nombre: this.nombre,
    direccion: this.direccion,
    telefono: this.telefono,
    correo: this.correo,
    horario: this.horario,
    barberoEncargado: this.barberoEncargado,
  };
};

mongoose.model("Barberia", BarberiaSchema); //Colección en base de datos


  


