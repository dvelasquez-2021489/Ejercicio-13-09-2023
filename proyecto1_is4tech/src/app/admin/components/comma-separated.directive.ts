import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCommaSeparated]'
})
export class CommaSeparatedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('blur') onBlur() {
    // Obtener el valor actual del elemento
    const value = this.el.nativeElement.value;

    // Formatear el valor con comas
    const formattedValue = this.formatWithCommas(value);

    // Actualizar el valor del elemento con el formato con comas
    this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
  }

  private formatWithCommas(value: string): string {
    // Verificar si el valor es numérico
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      // Formatear el valor numérico con comas
      return numericValue.toLocaleString('en-US');
    } else {
      // Si no es numérico, devolver el valor original
      return value;
    }
  }
}
