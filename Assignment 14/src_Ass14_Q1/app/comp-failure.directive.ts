import { Directive } from '@angular/core';
import { ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective 
{
  constructor(private ele:ElementRef) 
  { 
    ele.nativeElement.style.color ='blue';
  }

  @HostListener('mouseover') onmouseover()
  {
    this.setcolor('red');
  }

  @HostListener('mouseout') onmouseout()
  {
    this.setcolor('black');
  }

  public setcolor(color:string)
  {
    this.ele.nativeElement.style.color = color;
  }
}
