class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(5, 4);
  console.log(rectangle.getArea()); 
  