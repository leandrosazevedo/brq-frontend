import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment as env } from "src/environments/environment";
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    getPessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${env.API_REST}/pessoa`).pipe(
          map(obj => obj),
          catchError(e => this.erroHandler(e))
        )
    }

    save(pessoa:Pessoa){
      if(pessoa.id){
        return this.editPessoa(pessoa);
      } else {
        return this.insertPessoa(pessoa);
      }
    }

    insertPessoa(pessoa: Pessoa): Observable<any> {
      return this.http.post<Pessoa>(`${env.API_REST}/pessoa`, pessoa).pipe(
        map(obj => obj),
        catchError(e => this.erroHandler(e))
      )
    }

    editPessoa(pessoa: Pessoa): Observable<any> {
      return this.http.put<Pessoa>(`${env.API_REST}/pessoa/${pessoa.id}`, pessoa).pipe(
        map(obj => obj),
        catchError(e => this.erroHandler(e))
      )
    }

    deletePessoa(pessoa: Pessoa): Observable<any> {
      return this.http.delete<Pessoa>(`${env.API_REST}/pessoa/${pessoa.id}`).pipe(
        map(obj => obj),
        catchError(e => this.erroHandler(e))
      )
  }

    // auxiliares
    showMensage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "x", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: isError ? ['msg-error'] : ['msg-success']
        });
      }

    erroHandler(e : any): Observable<any>{
    this.showMensage('Ocorreu um erro! tente novamente', true)
    return EMPTY
    }

}