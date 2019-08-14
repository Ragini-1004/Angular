import { Component } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 7';
  str="Marvellous Infosystems";
  fun()
  {
    return this.str="MARVELLOUS INFOSYSTEMS";
  }
  gun()
  {
    return this.str="marvellous infosystems";
  }
}
