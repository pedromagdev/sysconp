import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  formularioLogin!: FormGroup;
  error!: string;
  loginError: string = '';
  submitted = false; 

  constructor(
    private fb: FormBuilder, 
    private router: Router // Serviço de roteamento injetado
  ) { }

  ngOnInit(){
    this.formularioLogin = this.fb.group({
      femail: ['',[Validators.required, Validators.email],], // Validators.email para validar formato de email
      fsenha: ['', [Validators.required]]
    }); 
  }

  onSubmit(): void {
    this.submitted = true;
    
    // Se o formulário for inválido, sai da função
    if (this.formularioLogin.invalid) {
      return;
    }
    
    const logar: User = {
      username: this.formularioLogin.get('femail')?.value,
      password: this.formularioLogin.get('fsenha')?.value,
    };
  
    // Verifica se o e-mail e a senha são corretos
    if (logar.username === 'administrator@pedromag' && logar.password === 'temp.12345') {
      // Redireciona para a rota desejada
      this.router.navigate(['/sysconp']);
    } else {
      // Se o e-mail ou senha estiverem incorretos, exibe mensagem de erro
      this.loginError = 'Email ou senha incorretos. Tente novamente.';
    }
  }
  
}
