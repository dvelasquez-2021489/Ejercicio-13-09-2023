import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReusableDialogComponent } from '../shared/reusable-dialog/reusable-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public dialog: MatDialog) {}

  openDialog_01() {
    const dialogRef = this.dialog.open(ReusableDialogComponent, {
      data: {
      }
    });
  }
}

