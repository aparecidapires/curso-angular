import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAuthenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@gmail.com' &&
      usuario.senha === '123456') {
      this.usuarioAuthenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/'])
    } else {
      this.usuarioAuthenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAuthenticado() {
    return this.usuarioAuthenticado;
  }

}
