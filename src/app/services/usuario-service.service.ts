import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuariosModel } from '../utils/models/usuarios-model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  adicionarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario).pipe(
      catchError((error) => {
        throw 'Erro ao adicionar usuário: ' + error;
      })
    );
  }

  editarUsuario(payload: any): Observable<any> {
    const url = `${this.apiUrl}/${payload.id}`;
    return this.http.put<any>(url, payload).pipe(
      catchError((error) => {
        throw 'Erro ao editar usuário: ' + error;
      })
    );
  }

  deletarUsuario(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError((error) => {
        throw 'Erro ao deletar usuário: ' + error;
      })
    );
  }

  listarUsuarios(): Observable<UsuariosModel[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        throw 'Erro ao buscar usuários: ' + error;
      })
    );
  }

  listarUsuarioPorId(id: number): Observable<UsuariosModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        throw 'Erro ao buscar usuário por ID: ' + error;
      })
    );
  }
}
