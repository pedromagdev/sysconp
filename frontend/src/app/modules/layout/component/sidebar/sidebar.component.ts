import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false; // Atributo que controla se as descrições dos menus estão visíveis

  // Itens do menu
  menuItems = [
    { icon: 'dashboard', label: 'Dashboard 1' },
    { icon: 'dashboard', label: 'Dashboard 2' },
    { icon: 'dashboard', label: 'Dashboard 3' },
  ];

  // Itens das aplicações
  appItems = [
    { icon: 'chat', label: 'Chat' },
    { icon: 'email', label: 'Email' },
  ];
  

  // Método para alternar o estado do sidebar
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
