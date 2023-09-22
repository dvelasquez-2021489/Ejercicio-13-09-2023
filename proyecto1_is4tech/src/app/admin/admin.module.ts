import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { ParamsComponent } from '../params/params.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableComponent } from './components/table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { FechaComponent } from './components/fecha/fecha.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommaSeparatedDirective } from './components/comma-separated.directive';
import { HighlightDirective } from './components/highlight.directive';
import { CopyToClipboardDirective } from './components/copy-to-clipboard.directive';
import { SubstringPipe } from './components/substring.pipe';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReusableDialogComponent } from '../shared/reusable-dialog/reusable-dialog.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [DogsComponent, ParamsComponent, FormsComponent, TableComponent, StepperComponent, FechaComponent, CommaSeparatedDirective, HighlightDirective, CopyToClipboardDirective, SubstringPipe, FormularioComponent, ReusableDialogComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule, MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatPaginatorModule, 
    MatStepperModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTableModule,
    MatDatepickerModule,
    MatSlideToggleModule,
   ]
})
export class AdminModule {}


