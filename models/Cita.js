class Cita {
    constructor({id, numeroCita, cliente, barberia, servicios, fecha, hora}) {
      this.id = id;
      this.numeroCita = numeroCita; 
      this.cliente = cliente; 
      this.barberia = barberia; 
      this.servicios = servicios; 
      this.fecha = fecha; 
      this.hora = hora; 
    }
  
}
  
module.exports = Cita;