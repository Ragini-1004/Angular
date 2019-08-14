function Fibonacci(num:number)
{
    var no1=0,no2=1,no3:number=0,i=0;
    console.log(no1);
    console.log(no2);
    while(no3<num)
    {
        no3=no1 + no2;
        no1=no2;
        no2=no3;
        console.log(no3);
    }
}

Fibonacci(21);