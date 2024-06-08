// Shape class definition
class Shape {
    constructor(sides = []) {
      this.sides = sides;
    }
  
    perimeter = () => this.sides.length ? this.sides.reduce((total, side) => total + side, 0) : 0;
  }

  // Rectangle class definition
class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
      super([length, width, length, width]);
      this.length = length;
      this.width = width;
    }
  
    area = () => this.length * this.width;
  }

  // Triangle class definition
class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
      super([sideA, sideB, sideC]);
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }
  
    area = () => {
      const s = this.perimeter() / 2;
      return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
  }

  // Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

// Process and test the array of side arrays
for (const sides of data) {
  let shape = null;
  switch (sides.length) {
    case 2:
      shape = new Rectangle(...sides);
      if (sides[0] === sides[1]) {
        console.log(`Square with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
      } else {
        console.log(`Rectangle with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
      }
      break;
    case 3:
      shape = new Triangle(...sides);
      console.log(`Triangle with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
      break;
    default:
      console.log(`Shape with ${sides.length} side${sides.length !== 1 ? 's' : ''} unsupported`);
      break;
  }
}


// Test the Shape class
// Comment out the test code after confirming it works
// console.log(new Shape([5, 10]).perimeter()); // 15
// console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
// console.log(new Shape().perimeter()); // 0
  
// Test the Rectangle class
// Comment out the test code after confirming it works
// console.log(new Rectangle(4, 4).perimeter());  // 16
// console.log(new Rectangle(4, 4).area());  // 16
// console.log(new Rectangle(5, 5).perimeter()); // 20
// console.log(new Rectangle(5, 5).area()); // 25
// console.log(new Rectangle().perimeter()); // 0
// console.log(new Rectangle().area()); // 0

// Test the Triangle class
// Comment out the test code after confirming it works
// console.log(new Triangle(3, 4, 5).perimeter());  // 12
// console.log(new Triangle(3, 4, 5).area());  // 6
// console.log(new Triangle().perimeter()); // 0
// console.log(new Triangle().area()); // 0
