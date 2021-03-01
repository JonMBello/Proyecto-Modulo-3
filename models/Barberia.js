class Barberia {
    constructor(id, nombre, direccion, telefono, correo, horario, barberoEncargado, barberos, servicios) {
      this.id = id;
      this.nombre = nombre; 
      this.direccion = direccion;
      this.telefono = telefono; 
      this.correo = correo; 
      this.horario = horario; 
      this.barberoEncargado = barberoEncargado;
      this.barberos = barberos; 
      this.servicios = servicios; 
    }
  
  }
  
  module.exports = Barberia;