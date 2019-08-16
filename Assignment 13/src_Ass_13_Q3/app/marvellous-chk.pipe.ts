import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'marvellousChk' })
export class MarvellousChkPipe implements PipeTransform
{
  transform(value:number,param: string): string
  {
    if(param == 'Prime')
    {
      let sum=0;
      for(let i=1 ;i <= value/2 ;i++)
      {
        if(value % i ==0)
        {
          sum=sum+i;
        }
      }
      if(sum == 1)
        return value+" is Prime number";
      else
        return value+" is not Prime number";
    }
    if(param == 'Perfect')
    {
      let sum=0;
      for(let i=1 ;i <= value/2 ;i++)
      {
        if(value % i ==0)
        {
          sum=sum+i;
        }
      }
      if(sum == value)
        return value+" is Perfect number";
      else
        return value+" is not Perfect number";
    }
    if(param == 'Even')
    {
      if(value % 2 == 0)
      {
        return value+" is Even number";
      }
      else
      {
        return value+" is not Even number";
      }
    }
    if(param == 'Odd')
    {
      if(value % 2 != 0)
      {
        return value+" is Odd number";
      }
      else
      {
        return value+" is not Odd number";
      }
    }
  }
}
