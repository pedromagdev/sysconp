import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysconpRoutingModule } from './sysconp-routing.module';
import { SysconpComponent } from './sysconp.component';
import { LayoutModule } from "../layout/layout.module";


@NgModule({
  declarations: [
    SysconpComponent
  ],
  imports: [
    CommonModule,
    SysconpRoutingModule,
    LayoutModule
]
})
export class SysconpModule { }
