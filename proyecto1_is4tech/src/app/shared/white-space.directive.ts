import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const trimmedValue = value.trim();
    this.el.nativeElement.value = trimmedValue;
  }
}
