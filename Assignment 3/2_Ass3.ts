class Circle
{
    Radius:number;
    PI:number;

    constructor(value1:number,PI :number=3.14)
    {
        this.Radius =value1;
        this.PI=PI;
    }
    Area():number
    {
        var area:number;
        area = (this.PI * this.Radius*this.Radius);
        return area;
    }
}
var obj3=new Circle(5);
console.log("Area of circle of radius 5 is "+obj3.Area());
var obj4=new Circle(10.55);
console.log("Area of circle of radius 10.55 is "+obj4.Area());