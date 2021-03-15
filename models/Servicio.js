//Importando mongoose y uniqueValidator.
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
//Definiendo el objeto ServicioSchema con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const ServicioSchema = new mongoose.Schema({     
  nombre:{type: String, required: true},
  descripcion:{type: String, required: true},
  barberia:{type: mongoose.Schema.Types.ObjectId, ref:"Barberia"},
  precio:{type: Number, required: true}
}, { timestamps: true });  
ServicioSchema.plugin(uniqueValidator, { message: "Ya existe" }); 
ServicioSchema.methods.publicData = function(){
  return {
    id: this._id,
    nombre: this.nombre,
    descripción: this.descripción,
    precio: this.precio
  };
};
//Define el modelo Servicios, utilizando el esquema ServicioSchema.
mongoose.model("servicios", ServicioSchema); //Colección en base de datos