function Maximum(num:number[]):number
{
    var iMax:number=0,iPos=0;
    var iMax2:number=0;
    for(var i=0; i< num.length; i++)
    {
        if(num[i]> iMax)
        {
            iMax=num[i];
            iPos=i;
        }
    }
    num[iPos]=0;
    for(var i=0; i< num.length; i++)
    {
        if(num[i]> iMax2)
        {
            iMax2=num[i];
        }
    }
    return iMax2;
}
var arr:number[]= [23,89,6,29,56,45,77,32 ] ;
var iret=Maximum(arr);
console.log("Second Maximum number from array is "+iret);