class Arithmetic
{
    Number1:number;
    Number2:number;
    
    constructor(value1 :number,value2:number)
    {
        this.Number1 = value1;
        this.Number2 = value2;
    }
    Addition():number
    {
        return this.Number1+this.Number2;
    }
    Subtraction():number
    {
        return this.Number1-this.Number2;
    }
    Multiplication():number
    {
        return this.Number1*this.Number2;
    }
    Division():number
    {
        return this.Number1/this.Number2;
    }
}
var obj1=new Arithmetic(30,18);
console.log("Addition is "+obj1.Addition());
console.log("Subtraction is "+obj1.Subtraction());
console.log("Multiplication is "+obj1.Multiplication());
console.log("Division is "+obj1.Division());

var obj2=new Arithmetic(-50,15);
console.log("Addition is "+obj2.Addition());
console.log("Subtraction is "+obj2.Subtraction());
console.log("Multiplication is "+obj2.Multiplication());
console.log("Division is "+obj2.Division());