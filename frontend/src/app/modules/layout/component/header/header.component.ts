import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Output() toggleSidenav = new EventEmitter<void>();

  toggleSidebar() {
    this.toggleSidenav.emit(); // Emitir o evento para o componente pai
    console.log("ola");
  }

}
