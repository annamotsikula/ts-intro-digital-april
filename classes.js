var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(length, height) {
        this.a = length;
        this.b = height;
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.a + this.b);
    };
    Rectangle.prototype.print = function () {
        console.log("Length is ".concat(this.a, ", Height is: ").concat(this.b));
        console.log("Perimeter: ".concat(this.perimeter()));
    };
    return Rectangle;
}());
var purpleRectangle = new Rectangle(8, 10);
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        return _super.call(this, side, side) || this;
    }
    Square.prototype.build = function () {
        console.log('Build Square');
    };
    return Square;
}(Rectangle));
;
var yellowSquare = new Square(7);
var squareArea = yellowSquare.area();
yellowSquare.print();
console.log(squareArea);
// const sq: SquareShape = {
//     a: 20,
//     b: 20,
//     area() { return 30 },
//     print() { return 100 },
//     perimeter() { return 40 }
// }
// class uses another class =>>  extends
// class uses interface =>> implements
// interface uses another interface =>> extends
