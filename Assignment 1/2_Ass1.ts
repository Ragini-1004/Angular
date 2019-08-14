function Area(radius:number,PI:number=3.14):number
{
    var area= PI *radius*radius;
    return area;
}

var iret:number;

iret=Area(5);
console.log("Area of circle is "+iret);