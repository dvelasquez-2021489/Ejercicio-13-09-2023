import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    // Obtener el valor del elemento en el que está contenido la directiva
    const textToCopy = this.el.nativeElement.innerText;

    // Crear un elemento de texto temporal para copiar el contenido
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;

    // Agregar el elemento temporal al DOM
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto en el elemento temporal
    tempInput.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal del DOM
    document.body.removeChild(tempInput);
  }
}

