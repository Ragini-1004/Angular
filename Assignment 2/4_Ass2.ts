var ChkArmstrong = (x:number)=> {    
    var temp:number = x;
    var sum:number=0;
    var digit:number=0;

    while(x > 0)
    {
        digit=x %10;
        sum = sum+(digit*digit*digit);
        x = Math.floor(x/10);
    }
    if(temp == sum)
         console.log("It is Armstrong number");
    else
    console.log("It is not Armstrong number");
 } 
 ChkArmstrong(153);
 ChkArmstrong(23);