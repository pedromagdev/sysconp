import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Output() toggleSidebar = new EventEmitter<void>();

  toggle() {
    this.toggleSidebar.emit(); // Emite o evento para o componente pai
  }
}
