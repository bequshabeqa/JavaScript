class Triangle extends Shape {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;  // სამკუთხედი ფართობი
  }
}