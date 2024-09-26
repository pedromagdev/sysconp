import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: '**', redirectTo:'login'},
  { path: 'sysconp', loadChildren: () => import('./modules/sysconp/sysconp.module').then(m => m.SysconpModule) },
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
