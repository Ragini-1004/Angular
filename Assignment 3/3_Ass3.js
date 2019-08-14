var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(value1, PI) {
        if (PI === void 0) { PI = 3.14; }
        this.Radius = value1;
        this.PI = PI;
    }
    Circle.prototype.Area = function () {
        return (this.PI * this.Radius * this.Radius);
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(val1) {
        return _super.call(this, val1) || this;
    }
    CircleX.prototype.Circumference = function () {
        return (2 * this.PI * this.Radius);
    };
    return CircleX;
}(Circle));
var obj = new CircleX(5);
console.log("Area of circle with radius 5 is " + obj.Area());
console.log("Circumference of circle with radius 5 is " + obj.Circumference());
var obj3 = new CircleX(10);
console.log("Area of circle with radius 10 is " + obj3.Area());
console.log("Circumference of circle with radius 10 is " + obj3.Circumference());
