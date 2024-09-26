import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  opened = false;

  toggle() {
    this.opened = !this.opened; // Alterna o estado de aberto e fechado
  }
}
