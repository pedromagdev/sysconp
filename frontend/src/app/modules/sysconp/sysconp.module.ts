import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysconpRoutingModule } from './sysconp-routing.module';
import { SysconpComponent } from './sysconp.component';


@NgModule({
  declarations: [
    SysconpComponent
  ],
  imports: [
    CommonModule,
    SysconpRoutingModule
  ]
})
export class SysconpModule { }
