function ChkPrime(no:number):boolean
{
    var i:number;
    var sum:number=0;
    for(i=1 ; i<= no/2 ; i++)
    {
        if(no % i == 0)
        {
            sum=sum+i;
        }
    }
    if(sum == 1)
        return true;
    else
        return false;
}
var bret:boolean;
bret=ChkPrime(11);
if(bret == true)
    console.log("It is prime number");
else
    console.log("It is not prime number");