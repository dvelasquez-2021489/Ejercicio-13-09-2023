import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DogsServiceService } from '../../services/dogs-service.service';
import { dogs } from '../../interface/dogs-interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as _moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMMM DD,YYYY',
    monthYearLabel: 'MMMM YYYY',
  },
};



@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],   providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},

  ],
})
export class FechaComponent {
  contenidoTextarea: string = '';
  maxDate = new Date();
  minDate = new Date(2023,0,1);
  moment = _moment;
  title: string = '';

  constructor() {
    this.form = new FormGroup({
      date: new FormControl(this.moment())
    });
  }

  form = new FormGroup({
    date: new FormControl(_moment()),
  });
  multi: any;
  setMonthAndYear(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    console.log(normalizedMonthAndYear)
    //this.form.get('date')?.setValue(new Date( String (normalizedMonthAndYear)).toString())
    this.form.get('date')?.setValue(normalizedMonthAndYear)
    console.log(this.form.get('date')?.value)
    datepicker.close();
    
  }
}

