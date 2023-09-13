import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: string; // Color en formato RGB

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeHighlight();
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private removeHighlight() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}

