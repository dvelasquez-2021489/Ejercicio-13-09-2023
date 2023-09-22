import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReusableDialogComponent } from '../reusable-dialog/reusable-dialog.component';

@Component({
  selector: 'app-audit-individual',
  templateUrl: './audit-individual.component.html',
  styleUrls: ['./audit-individual.component.css']
})
export class AuditIndividualComponent {
  @Input() objeto = {
    userCreated: '',
    dateCreated: '',  
    userUpdated: '',
    dateUpdated: ''
  }

  constructor(public dialog: MatDialog){}

  openDialog_01() {
    const dialogRef = 
    this.dialog.open(ReusableDialogComponent, {
      width: "auto",
      height: "auto",
      autoFocus: false,
      restoreFocus: false,
      disableClose: true,
      data: {
        userCreated: this.objeto.userCreated,
        dateCreated: this.objeto.dateCreated,  
        userUpdated: this.objeto.userUpdated,
        dateUpdated: this.objeto.dateUpdated
      },
      position: {
        right: '10px', top: '60px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
