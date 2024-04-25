// class uses another class =>>  extends
// class uses interface =>> implements
// interface uses another interface =>> extends

class Rectangle implements Shape {
    a: number;
    b: number;

    constructor(length: number, height: number) {
        this.a = length;
        this.b = height;
    }

    area(): number {
        return this.a * this.b
    }

    private perimeter(): number {
        return 2 * (this.a + this.b)
    }

    print(): void {
        console.log(`Length is ${this.a}, Height is: ${this.b}`);
        console.log(`Perimeter: ${this.perimeter()}`)
    }


}

const purpleRectangle = new Rectangle(8, 10);




class Square extends Rectangle {

    constructor(side: number) {
        super(side, side)
    }

    build() {
        console.log('Build Square')
    }
};

const yellowSquare = new Square(7);
const squareArea = yellowSquare.area();
yellowSquare.print();
console.log(squareArea);

interface Shape {
    a: number,
    b: number,
    area: () => number,
    print: () => void
}

interface SquareShape extends Shape {
    perimeter: () => number
}

// const sq: SquareShape = {
//     a: 20,
//     b: 20,
//     area() { return 30 },
//     print() { return 100 },
//     perimeter() { return 40 }
// }

