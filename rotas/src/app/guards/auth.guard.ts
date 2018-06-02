import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.verificarAcesso();

  }

  private verificarAcesso() {

    if (this.authService.usuarioEstaAuthenticado()) {
      return true;
    } else {
      this.router.navigate(['/login'])

      return false;
    }
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Verificar se o usuário pode carregar o módulo')

    return this.verificarAcesso();
  }

}
