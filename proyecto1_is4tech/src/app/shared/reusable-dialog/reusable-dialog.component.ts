import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.css']
})
export class ReusableDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  get userCreated() {
    return this.data.UserCreated;
  }

  get dateCreated() {
    return this.data.DateCreated;
  }

  get userUpdated() {
    return this.data.UserUpdated;
  }

  get dateUpdated() {
    return this.data.DateUpdated;
  }
}
