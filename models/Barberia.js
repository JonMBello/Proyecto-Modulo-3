// Barberia.js
/** Clase que representa una barberia */

class Barberia {
    constructor(id, nombre, direccion, telefono, correo, horario, barberoEncargado, barberos, servicios) {
      this.id = id;
      this.nombre = nombre; //Nombre de la barberia
      this.direccion = direccion; //Dirección de la barberia
      this.telefono = telefono; //Telefono de la barberia
      this.correo = correo; //Correo de la barberia
      this.horario = horario; //Horario de trabajo de la barberia
      this.barberoEncargado = barberoEncargado;// Barbero encargado de la barberia
      this.barberos = barberos; // Barberos que trabajan en la barberia
      this.servicios = servicios; //Servicios que ofrecen en la barberia
        }
    }
  

module.exports = Barberia;


  
