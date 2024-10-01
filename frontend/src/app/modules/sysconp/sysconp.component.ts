import { Component } from '@angular/core';

@Component({
  selector: 'app-sysconp',
  templateUrl: './sysconp.component.html',
  styleUrls: ['./sysconp.component.scss']
})
export class SysconpComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
