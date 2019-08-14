function Summation(num:number[]):number
{
    var sum:number=0;
    for(var i=0 ;i<num.length ; i++)
    {
        sum = sum+num[i];
    }
    return sum;
}

var arr:number[]=[23,6,7,4,5,7];
var iret=Summation(arr);
console.log("Addition is "+iret);