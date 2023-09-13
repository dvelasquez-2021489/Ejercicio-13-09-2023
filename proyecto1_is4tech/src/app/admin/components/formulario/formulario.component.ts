import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FechaNacimientoValidator, NitValidator, NoEmptyValidator, NoSpecialCharactersValidator, WhiteSpaceValidator, minLengthValidator } from '../../validators/nit.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: any;
  fb: any;
  today = new Date()
  nuevoIngreso = false
  profileForm = new FormGroup({    
      nombre: new FormControl('', [Validators.required, NoSpecialCharactersValidator(), WhiteSpaceValidator()]),
      fechaNacimiento: new FormControl('', [Validators.required, FechaNacimientoValidator()]),
      nit: new FormControl('', [Validators.required, NitValidator() ]),
      comentario:  new FormControl('', [Validators.required, NoEmptyValidator() ]),
      nuevoIngreso:  new FormControl(false, [Validators.required, ]),
      telefonoEmergencia:  new FormControl(''),
      direccion:  new FormControl(''),        
  }); 
  
    constructor(){

    /*this.formulario.get('nuevoIngreso').valueChanges.subscribe((value: any) => {
      if (value) {
        this.formulario.get('telefonoEmergencia').setValidators([Validators.required, Validators.maxLength(8)]);
        this.formulario.get('direccion').setValidators([Validators.required]);
      } else {
        this.formulario.get('telefonoEmergencia').clearValidators();
        this.formulario.get('direccion').clearValidators();
      }
      this.formulario.get('telefonoEmergencia').updateValueAndValidity();
      this.formulario.get('direccion').updateValueAndValidity();
    });*/
  }

  ngOnInit(): void {
    /*this.formulario = this.fb.group({
      nombre: ['', [Validators.required, NoEmptyValidator, WhiteSpaceValidator, NoSpecialCharactersValidator]],
      fechaNacimiento: ['', [Validators.required, FechaNacimientoValidator]],
      nit: ['', [Validators.required, NitValidator]],
      comentario: ['', [Validators.required, NoEmptyValidator, WhiteSpaceValidator, Validators.maxLength(200)]],
      nuevoIngreso: [false],
      telefonoEmergencia: [''],
      direccion: ['']
    });*/
  }

  guardar(formulario: NgForm) {
    if (formulario.valid) {
      console.log('Formulario válido, datos enviados:', formulario.value);
    }
  }

  limpiar() {
    this.profileForm.get('nombre')?.reset()
    this.profileForm.get('fechaNacimiento')?.reset()
    this.profileForm.get('nit')?.reset()
    this.profileForm.get('comentario')?.reset()
    this.profileForm.get('nuevoIngreso')?.reset()
    this.profileForm.get('telefonoEmergencia')?.setValue(null)
    this.profileForm.get('direccion')?.setValue(null)
  }
  
  nuevo() { console.log(this.profileForm.get('nuevoIngreso')?.value)
    if(this.profileForm.get('nuevoIngreso')?.value===true) {
      console.log('null')
      this.profileForm.get('telefonoEmergencia')?.setValidators([Validators.required])
      this.profileForm.get('telefonoEmergencia')?.setErrors({required: true})
      this.profileForm.get('direccion')?.addValidators([Validators.required])
      this.profileForm.get('direccion')?.setErrors({required: true})
      console.log(this.profileForm.get('nombre'))
      console.log(this.profileForm.get('direccion'))
    }else{
      this.profileForm.get('telefonoEmergencia')?.setValidators(null)
      this.profileForm.get('telefonoEmergencia')?.setErrors(null)
      this.profileForm.get('direccion')?.setValidators(null)
      this.profileForm.get('direccion')?.setErrors(null)
    }
  }
}


