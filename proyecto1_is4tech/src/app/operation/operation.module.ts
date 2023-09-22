import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableDialogComponent } from '../shared/reusable-dialog/reusable-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OperationComponent } from './operation/operation.component';
import { OperationRoutingModule } from './operation.routing.module';

@NgModule({
  declarations: [
    OperationComponent
  ],
  imports: [CommonModule, MatDialogModule, MatButtonModule, OperationRoutingModule, SharedModule]
})
export class OperationModule {}
