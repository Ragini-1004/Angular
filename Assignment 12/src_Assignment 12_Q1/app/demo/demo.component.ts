import { Component, OnInit } from '@angular/core';
import { ArithmeticService} from '../arithmetic.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  public value1;
  public value2;

  constructor(private obj:ArithmeticService) { }

  ngOnInit()
  {
    this.value1 = this.obj.Add(10,20);
    this.value2 = this.obj.Sub(70,25);
  }
}
