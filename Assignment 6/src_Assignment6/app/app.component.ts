import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    <label>Marvellous Infosystems</label><br>
    <input type ="text" size =15>
  </h1>
</div>
<app-new-comp></app-new-comp>`,
  styles: [`label
  {
      color:blue;
  } `]
})
export class AppComponent {
  title = 'Demo';
}