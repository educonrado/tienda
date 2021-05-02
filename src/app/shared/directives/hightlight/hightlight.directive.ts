import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(
    private _element: ElementRef
  ) {
    _element.nativeElement.style.backgroundColor = '#068963';
  }

}
