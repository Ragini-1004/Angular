var Circle = /** @class */ (function () {
    function Circle(value1, PI) {
        if (PI === void 0) { PI = 3.14; }
        this.Radius = value1;
        this.PI = PI;
    }
    Circle.prototype.Area = function () {
        var area;
        area = (this.PI * this.Radius * this.Radius);
        return area;
    };
    return Circle;
}());
var obj3 = new Circle(5);
console.log("Area of circle of radius 5 is " + obj3.Area());
var obj4 = new Circle(10.55);
console.log("Area of circle of radius 10.55 is " + obj4.Area());
