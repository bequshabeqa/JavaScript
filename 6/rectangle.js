class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;  // მართკუთხედის ფართობი
  }
}