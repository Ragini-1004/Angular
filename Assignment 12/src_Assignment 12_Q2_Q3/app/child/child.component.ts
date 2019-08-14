import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
 {
   public val1;val2;iRet;
  constructor(private nobj:NumberService,private sobj:StringService) { }

  ngOnInit() 
  {
    this.val1 = this.nobj.ChkPrime(7);
    this.val2 = this.nobj.ChkPrime(16);
    this.iRet = this.sobj.CountCapital("INDIA is my Country");
  }
}
