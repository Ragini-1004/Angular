import { Component, OnInit } from '@angular/core';
import { StringService} from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  value;
  constructor(private sobj:StringService) { }

  ngOnInit() 
  {
    this.value= this.sobj.CountCapital("Hello World INDIA");
  }
}
