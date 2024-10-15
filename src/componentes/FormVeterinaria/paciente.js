export class Paciente {
  constructor(nombreMascota, nombreDueño, fecha, hora, sintomas) {
    this.id = window.self.crypto.randomUUID();
    this.nombreMascota = nombreMascota;
    this.nombreDueño = nombreDueño;
    this.fecha = fecha;
    this.hora = hora;
    this.sintomas = sintomas;
  }
}
