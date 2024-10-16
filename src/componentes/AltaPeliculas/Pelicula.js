export class Pelicula {
  constructor(nombrePelicula, descripcion, genero) {
    this.id = window.self.crypto.randomUUID();
    this.nombrePelicula = nombrePelicula;
    this.descripcion = descripcion;
    this.genero = genero;
  }
}
