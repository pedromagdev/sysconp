import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysconpComponent } from './sysconp.component';

const routes: Routes = [{ path: '', component: SysconpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysconpRoutingModule { }
