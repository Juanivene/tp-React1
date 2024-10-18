export class Recipe {
  constructor(title, imagen, content) {
    this.id = window.self.crypto.randomUUID();
    this.title = title;
    this.imagen = imagen;
    this.content = content;
  }
}
