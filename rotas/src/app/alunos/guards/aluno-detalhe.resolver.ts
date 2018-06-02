import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { AlunosService } from "../alunos.service";
import { Aluno } from "../aluno";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    console.log('AlunosGuardResolve')

    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }
}