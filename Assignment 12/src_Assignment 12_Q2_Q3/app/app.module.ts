import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberService} from './number.service';
import { StringService} from './string.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumberService,StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
