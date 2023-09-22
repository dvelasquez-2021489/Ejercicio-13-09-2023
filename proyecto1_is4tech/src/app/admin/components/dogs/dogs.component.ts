import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DogsServiceService } from '../../services/dogs-service.service';
import { dogs } from '../../interface/dogs-interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as _moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ReusableDialogComponent } from 'src/app/shared/reusable-dialog/reusable-dialog.component';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear()
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMMM YYYY',
  },
};



@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],   providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},

  ],
})
export class DogsComponent implements OnInit, OnDestroy {
  contenidoTextarea: string = '';
  maxDate = new Date();
  minDate = new Date(2023,0,1);
  moment = _moment;
  public listdePerros: dogs = { message: '', status: '' };
  title: string = '';
  objeto = {
    userCreated: 'mvelasquez@gmail.com',
    dateCreated: '01/09/2023 19:58:45',  
    userUpdated: 'avasquez@is4tech.com',
    dateUpdated: '20/09/2023 11:08:47'
  }

  constructor(private DogsServiceService: DogsServiceService, public dialog: MatDialog) {
    this.form = new FormGroup({
      date: new FormControl(this.moment())
    });
  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(): void {
    this.DogsServiceService.get().subscribe({
      next: (respuesta: any) => {
        console.log(respuesta);
        this.listdePerros = respuesta;
      }
    });
  }

  public call() {
    this.DogsServiceService.call().subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listdePerros = respuesta;
    });
  }
  ngOnDestroy() {
    console.log('El componente DogsComponent se ha destruido.');
  }

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  form = new FormGroup({
    date: new FormControl(_moment()),
  });
  multi: any;
  text: any = 'Por fin hoy es viernes';
  setMonthAndYear(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    console.log(normalizedMonthAndYear)
    //this.form.get('date')?.setValue(new Date( String (normalizedMonthAndYear)).toString())
    this.form.get('date')?.setValue(normalizedMonthAndYear)
    console.log(this.form.get('date')?.value)
    datepicker.close();
    
  }
  openDialog() {
    const dialogRef = 
    this.dialog.open(DialogComponent, {
      width: "auto",
      height: "auto",
      autoFocus: false,
      restoreFocus: false,
      disableClose: true,
      data: {
        titulo: "Prueba diálogo",
        nombre: 'Darien Velásquez'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
