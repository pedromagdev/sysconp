import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysconpRoutingModule } from './sysconp-routing.module';
import { SysconpComponent } from './sysconp.component';
import { LayoutModule } from "../layout/layout.module";
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    SysconpComponent
  ],
  imports: [
    CommonModule,
    SysconpRoutingModule,
    LayoutModule,
    MatSidenavModule
]
})
export class SysconpModule { }
