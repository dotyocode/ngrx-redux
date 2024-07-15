import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import * as fromUsuariosActions from '../usuarios/usuario.actions';
import { usuariosTypeActions } from 'src/app/utils/enum/usuarios.enum';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions: Actions,
    private usuariosService: UsuarioService
  ) {}

  loadUsuarios$ = createEffect(() => //criando o effect
    this.actions.pipe(
      ofType(usuariosTypeActions.LOAD_USUARIOS), //Verificando o que foi executado
      exhaustMap(() =>
        this.usuariosService.listarUsuarios().pipe(
          //executa o servico de buscar usuarios
          map((payload: any) =>
            fromUsuariosActions.LoadUsuariosSucces({ payload }) //Retorno de sucesso
          ),
          catchError((error) =>
            of(fromUsuariosActions.LoadUsuariosFail({ error }))
          ) //Retorno de error
        )
      )
    )
  );

  loadUsuario$ = createEffect(() => //criando o effect
    this.actions.pipe(
      ofType(usuariosTypeActions.LOAD_USUARIO), //Verificando o que foi executado
      exhaustMap((record: any) =>
        this.usuariosService.listarUsuarioPorId(record.payload).pipe(
          //executa o servico de buscar usuarios
          map((payload: any) =>
            fromUsuariosActions.LoadUsuarioSucces({ payload }) //Retorno de sucesso
          ),
          catchError((error) =>
            of(fromUsuariosActions.LoadUsuarioFail({ error }))
          ) //Retorno de error
        )
      )
    )
  );

  cadastrarUsuario$ = createEffect(() => //criando o effect
    this.actions.pipe(
      ofType(usuariosTypeActions.CREATE_USUARIO), //Verificando o que foi executado
      exhaustMap((record: any) =>
        this.usuariosService.adicionarUsuario(record.payload).pipe(
          //executa o servico de buscar usuarios
          map((payload: any) =>
            fromUsuariosActions.CadastrarUsuarioSucces({ payload }) //Retorno de sucesso
          ),
          catchError((error) =>
            of(fromUsuariosActions.CadastrarUsuarioFail({ error }))
          ) //Retorno de error
        )
      )
    )
  );

  editarUsuario$ = createEffect(() =>  //criando o effect
    this.actions.pipe(
      ofType(usuariosTypeActions.UPDATE_USUARIO), //Verificando o que foi executado
      exhaustMap((record: any) =>
        this.usuariosService.editarUsuario(record.payload).pipe(
          //executa o servico de buscar usuarios
          map((payload: any) =>
            fromUsuariosActions.EditarUsuarioSucces({ payload }) //Retorno de sucesso
          ),
          catchError((error) =>
            of(fromUsuariosActions.EditarUsuarioFail({ error }))
          ) //Retorno de error
        )
      )
    )
  );

  deletarUsuario$ = createEffect(() =>     //criando o effect
    this.actions.pipe(
      ofType(usuariosTypeActions.DELETE_USUARIO), //Verificando o que foi executado
      exhaustMap((record: any) =>
        this.usuariosService.deletarUsuario(record.payload).pipe(
          //executa o servico de buscar usuarios
          map(() =>
            fromUsuariosActions.DeletarUsuarioSucces({
              payload: record.payload,
            }) //Retorno de sucesso
          ),
          catchError((error) =>
            of(fromUsuariosActions.DeletarUsuarioFail({ error }))
          ) //Retorno de error
        )
      )
    )
  );
}
