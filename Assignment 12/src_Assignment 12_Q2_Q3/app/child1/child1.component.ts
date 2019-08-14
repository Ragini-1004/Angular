import { Component, OnInit } from '@angular/core';
import { NumberService} from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  value1;
  value2;
  constructor(private nobj:NumberService) { }

  ngOnInit() 
  {
    this.value1=this.nobj.ChkPrime(11);
    this.value2=this.nobj.ChkPrime(26);
  }
}
