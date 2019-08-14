import { Component, OnInit,Output ,EventEmitter, Input} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  @Input() public childmsg="";
  @Output() public eeobj=new EventEmitter();
  //parent_data="";
  public sender()
  {
    //this.eeobj.emit(this.parent_data);
    this.eeobj.emit("Hello from Child");
  }
}
