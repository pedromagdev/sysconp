import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar animações
import { MatInputModule } from '@angular/material/input'; // Para campos de input
import { MatButtonModule } from '@angular/material/button'; // Para botões
import { MatFormFieldModule } from '@angular/material/form-field'; // Para form-field

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule, // Necessário para as animações do Angular Material
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
