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
        return (this.PI * this.Radius*this.Radius); 
    }
}

class CircleX extends Circle
{
    constructor(val1:number)
    {
        super(val1);
    }
    Circumference():number
    {
        return (2 * this.PI* this.Radius);
    }
}
var obj=new CircleX(5);
console.log("Area of circle with radius 5 is "+obj.Area());
console.log("Circumference of circle with radius 5 is "+obj.Circumference());
var obj3=new CircleX(10);
console.log("Area of circle with radius 10 is "+obj3.Area());
console.log("Circumference of circle with radius 10 is "+obj3.Circumference());