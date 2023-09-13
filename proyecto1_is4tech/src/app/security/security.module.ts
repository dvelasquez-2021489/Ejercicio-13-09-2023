import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login01Module } from './security-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [Login01Module],
  exports: [LoginComponent]
})
export class SecurityModule {}
