class Rectangle {
    constructor(a, b){

      this.length = a;
      this.breadth = b;
    }
    perimeter() {

      return 2 * (this.length + this.breadth);
    }
    area(){

      return this.length * this.breadth;
    }
}

rect = new Rectangle(2, 3)
console.log(rect.perimeter(), rect.area())
