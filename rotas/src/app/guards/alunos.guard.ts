import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        // console.log(route);
        // console.log(state);

        console.log('AlunosGuard: Guarda de rota filha')

        if (state.url.includes('editar')) {
            // alert('Usuário sem acesso!');
            // return Observable.of(false);
        }
        return true
    }
}