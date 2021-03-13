// Barbero.js
const mongoose = require('mongoose');//Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator
const crypto = require('crypto');//Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken');//Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;// ????
//Definiendo el objeto Barbero con el constructor Schema.
//Definiendo cada campo con su respectivo tipo de dato.
const BarberoSchema = new mongoose.Schema({ 
  nombre:{type: String, required: true},
  telefono:{type: String, required: true},
  correo:{
    type: String,
    unique: true, 
    lowercase: true,
    required: [true, "no puede estar vacío"],
    match: [/\S+@\S+\.\S+/, "es inválido"],
    index: true,
  },
  genero: {type: String, required: true, enum: ['M', 'H', 'Otro']}, 
  barberia:{type: mongoose.Schema.Types.ObjectId, ref:"Barberia"},
  usuario: {                                                  
    type: String,
    unique: true, 
    lowercase: true,
    required: [true, "no puede estar vacío"],
    match: [/^[a-zA-Z0-9]+$/, "es inválido"],
    index: true,
  },   
  hash: String, //este campo se utilizará para la sesión
  salt: String //este campo se utilizará para la sesión 
}, {timestamps: true});  

// usando plugin de validación para que no se repitan correos ni usernames
BarberoSchema.plugin(uniqueValidator, { message: "Ya existe" });

BarberoSchema.methods.crearPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex"); // generando una "sal" random para cada usuario
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la sal
};

/**
 * Recibe el password, genera y compara el has con el de la base de datos
 */
 BarberoSchema.methods.validarPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

BarberoSchema.methods.generarJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: this._id,
    usuario: this.usuario,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

/**
 * Devuelve la representación de un usuario después de autenticar
 */
 BarberoSchema.methods.toAuthJSON = function(){
  return {
    usuario: this.usuario,
    correo: this.correo,
    token: this.generarJWT()
  };
};

/**
* Devuelve la representación de un barbero, sólo datos públicos
*/
BarberoSchema.methods.publicData = function(){
  return {
    id:this._id,
    nombre:this.nombre, 
    telefono:this.telefono,
    correo:this.correo,
    genero:this.genero,
    barberia:this.barberia,
    usuario:this.usuario,
  };
};

//Define el modelo Barbero, utilizando el esquema BarberoSchema.
mongoose.model("barberos", BarberoSchema);//Colección en base de datos