import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { authGuardGuard } from '../shared/guard/auth-guard.guard';
import { FormsComponent } from './components/forms/forms.component';
import { ParamsComponent } from '../params/params.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dogs',
        canActivate: [authGuardGuard],
        component: DogsComponent
      },
      {
        path: 'formulario',
        component: FormsComponent
      },
      {
        path: 'parametros',
        component: ParamsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
