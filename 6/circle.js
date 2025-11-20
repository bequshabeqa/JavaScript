class Circle extends Shape {
  constructor(name, radius) {
    super(name);  // მემკვიდრეობა, მშობლის კონსტრუქტორი
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;  // წრის ფართობი
  }
}