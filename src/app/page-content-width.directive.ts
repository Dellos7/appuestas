import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[pageContentWidth]'
})
export class PageContentWidthDirective {

  private _isActive = true;

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementClass( el.nativeElement, 'page-max-width', this._isActive );
  }

}
