import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(
    private element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = '#068963';
  }

}
