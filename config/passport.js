const passport = require('passport');                       //Importando passport, middleware para autenticación.
const LocalStrategy = require('passport-local').Strategy;   //Importando estrategia autenticación. --> passport-local
const mongoose = require('mongoose');
const Barbero = mongoose.model("barberos");
const Cliente = mongoose.model("clientes");

passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  Barbero.findOne({ correo: email }).then(function (user) {
    if (!user || !user.validarPassword(password)) {
      Cliente.findOne({ correo: email }).then(function (user) {
        if (!user || !user.validarPassword(password)) {
          return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
        }
        else{
          return done(null, false, { done: { 'Cliente': 'Logueado' } });
        }        
        //Agregar la verificación de cliente
      })
    }
    else{
      return done(null, false, { done: { 'Barbero': 'Logueado' } });
    }    
    //Agregar la verificación de cliente
  }).catch(done);
}));