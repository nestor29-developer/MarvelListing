import { AfterContentChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bc-circular-loading]'
})
export class BcCircularLoadingDirective implements AfterContentChecked {

  el: any;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterContentChecked(): void {
    this.setColorInLoader();
  }

  setColorInLoader() {
    this.el = this.elementRef.nativeElement;
    this.elementRef.nativeElement.querySelectorAll('.bc-circle-load').forEach((circle: any) => {
      circle.setAttribute('fill', this.el.getAttribute('bg-color'));
    });
  }

}
