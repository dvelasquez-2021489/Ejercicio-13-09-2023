import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './shared/guard/auth-guard.guard';
import { ParamsComponent } from './params/params.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: 'admin',
    canActivate: [authGuardGuard],
    loadChildren: () =>
      import('../app/admin/admin.module').then(x => x.AdminModule) //lazy loading
  },
  {
    path: 'operation',
    loadChildren: () =>
      import('../app/operation/operation.module').then(x => x.OperationModule) //lazy loading
  },
  { path: 'parametros', component: ParamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingModule = RouterModule.forRoot(routes, {
  useHash: true
});
