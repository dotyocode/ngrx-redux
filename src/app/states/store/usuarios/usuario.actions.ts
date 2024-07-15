import { createAction, props } from '@ngrx/store';
import { UsuariosModel } from 'src/app/utils/models/usuarios-model';
import { usuariosTypeActions } from 'src/app/utils/enum/usuarios.enum';

/*
  Actions são as ações que vao ser feitas para a mudança de estado
*/

//Load Usuarios
export const LoadUsuarios = createAction(usuariosTypeActions.LOAD_USUARIOS);

export const LoadUsuariosSucces = createAction(
  usuariosTypeActions.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuariosModel[] }>()
);

export const LoadUsuariosFail = createAction(
  usuariosTypeActions.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);

//Load Usuario
export const LoadUsuario = createAction(
  usuariosTypeActions.LOAD_USUARIO,
  props<{ payload: number }>()
);

export const LoadUsuarioSucces = createAction(
  usuariosTypeActions.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuariosModel }>()
);

export const LoadUsuarioFail = createAction(
  usuariosTypeActions.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

//Cadastrar Usuario
export const CadastrarUsuario = createAction(
  usuariosTypeActions.CREATE_USUARIO,
  props<{ payload: UsuariosModel }>()
);

export const CadastrarUsuarioSucces = createAction(
  usuariosTypeActions.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuariosModel }>()
);

export const CadastrarUsuarioFail = createAction(
  usuariosTypeActions.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//Editar Usuario
export const EditarUsuario = createAction(
  usuariosTypeActions.UPDATE_USUARIO,
  props<{ payload: UsuariosModel }>()
);

export const EditarUsuarioSucces = createAction(
  usuariosTypeActions.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuariosModel }>()
);

export const EditarUsuarioFail = createAction(
  usuariosTypeActions.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//Deletar Usuario
export const DeletarUsuario = createAction(
  usuariosTypeActions.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const DeletarUsuarioSucces = createAction(
  usuariosTypeActions.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const DeletarUsuarioFail = createAction(
  usuariosTypeActions.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);
