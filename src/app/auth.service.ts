import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthServiceService {

  public usuarioAutenticado : boolean = false;

 constructor(private router: Router) {

  }
  fazerLogin(usuario: string, senha: string) : any {
    if (usuario === 'eagle@gmail.com' && senha === 'voealto') {
      localStorage.setItem('username', 'Usuario');
      this.router.navigate(['dashboard']);
      this.usuarioAutenticado = true;
    } else {
      this.usuarioAutenticado = false;
    }
  }

  logout() : any {
    localStorage.removeItem('username');
  }

  getUser() : any { return localStorage.getItem('username');}
  logado(): boolean { return this.getUser() !== null; }
}
