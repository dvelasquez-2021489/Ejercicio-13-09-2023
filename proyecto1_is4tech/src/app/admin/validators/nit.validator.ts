import { AbstractControl, ValidationErrors } from '@angular/forms';

export function  minLengthValidator(minLength: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (value.length < minLength) {
      return { minLength: true };
    }
    return null;
  };
}

export function  NoSpecialCharactersValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      const regex = /^[a-zA-Z0-9\s]*$/;
        console.log(regex.test(value))
      if (!regex.test(value)) {
      return { noSpecialCharacters: true };
    }
      return null;
    };
  }

  export function NoEmptyValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
    if (control.value?.trim() === '') {
      return { noEmpty: true };
    }
    return null;
  }
}
  
  export function WhiteSpaceValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value.trim() !== control.value) {
      return { whiteSpace: true };
    }
    return null;
  }
}
  
  export function FechaNacimientoValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
    const fechaNacimiento = new Date(control.value);
    const fechaActual = new Date();
    if (fechaNacimiento >= fechaActual) {
      return { fechaNacimientoInvalida: true };
    }
    return null;
  }
}
  
  export function NitValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log(control.value)
        const nitPattern = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
    if (!nitPattern.test(control.value)) {
      return { nitInvalido: true };
    }
    return null;
  }
}