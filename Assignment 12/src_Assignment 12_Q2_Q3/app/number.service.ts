import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
   constructor() { }
  ChkPrime(num:number)
  {
    var i;
    var sum =0;
    for(i=1;i<= num/2;i++)
    {
      if(num % i == 0)
      {
        sum=sum+ i;
      }
    }
    if(sum == 1)
    {
      return num+" is Prime number";
    }
    else
    {
      return num+" is not Prime number";
    }
  }
}
