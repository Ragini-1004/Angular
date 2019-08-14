function Maximum(num:number[]):number
{
    var iMax:number=0;

    for(var i=0; i< num.length; i++)
    {
        if(num[i]> iMax)
        {
            iMax=num[i];
        }
    }
    return iMax;
}

var arr:number[]= new Array(8);
arr = [23,89,6,29,56,45,77,32 ] ;

var iret=Maximum(arr);
console.log("Maximum number from array is "+iret);