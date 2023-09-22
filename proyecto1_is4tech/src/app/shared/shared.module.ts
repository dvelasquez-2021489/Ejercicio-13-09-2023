import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirective } from './white-space.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AuditIndividualComponent } from './audit-individual/audit-individual.component';

@NgModule({
  declarations: [WhiteSpaceDirective, AuditIndividualComponent],
  imports: [CommonModule],
  exports: [WhiteSpaceDirective, AuditIndividualComponent]
})
export class SharedModule {}
