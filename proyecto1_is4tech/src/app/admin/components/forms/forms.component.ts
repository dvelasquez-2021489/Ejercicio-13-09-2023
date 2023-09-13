import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  inputValue = '';

  onInputChange() {
    console.log('Valor actual:', this.inputValue);
  }
}
