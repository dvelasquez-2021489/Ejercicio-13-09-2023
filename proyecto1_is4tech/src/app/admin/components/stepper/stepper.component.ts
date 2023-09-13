import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  step1Form: FormGroup;
  step2Form: FormGroup;
  mostrarDPI: boolean = false;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      fechaNacimiento: ['', [Validators.required, this.fechaValida.bind(this)]]
    });

    this.step2Form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }

  fechaValida(control: { value: string | number | Date; }) {
    const fechaNacimiento = new Date(control.value);
    const fechaActual = new Date();

    if (fechaNacimiento >= fechaActual) {
      return { fechaInvalida: true };
    }

    return null;
  }

  validarLetras(event: { keyCode: number; preventDefault: () => void; }) {
    const pattern = /[a-zA-Z ]/;
    const inputChar = String.fromCharCode(event.keyCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
