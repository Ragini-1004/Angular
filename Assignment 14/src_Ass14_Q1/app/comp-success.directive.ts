import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective 
{
  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.color ='blue';
  }

  @HostListener('mouseover') onmouseover()
  {
    this.setcolor('green');
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
