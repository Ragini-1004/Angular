function Area(radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var area = PI * radius * radius;
    return area;
}
var iret;
iret = Area(5);
console.log("Area of circle is " + iret);
