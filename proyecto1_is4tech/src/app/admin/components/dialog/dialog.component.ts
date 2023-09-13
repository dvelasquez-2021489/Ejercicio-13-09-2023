import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  emailFormControl = new FormControl('', [Validators.required]);
  titulo: any;
  nombre: any;
  cancelar: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = this.data.titulo,
    this.nombre = this.data.nombre
  }
  cancel() {

    this.dialogRef.close();

  }
}

