import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(str:string)
  {
    var i,count =0;
    
    for(i=0;i<str.length;i++)
    {
      if(((str.charAt(i)) >= 'A') && ((str.charAt(i)) <= 'Z'))
      {
        count++;
      }
    }
      return "Total number of capital letters in string:"+str+" are "+count;
  }
}
