import { Action, createReducer, on } from '@ngrx/store';
import { UsuariosState } from 'src/app/utils/models/usuarioState-model';
import * as fromUsuarioAction from '../usuarios/usuario.actions';

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuarioReducer = createReducer(
  initialState,
  on(fromUsuarioAction.LoadUsuariosSucces, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuarioAction.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    usuarios: [],
    error: error,
  })),

  on(fromUsuarioAction.LoadUsuarioSucces, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuarioAction.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    usuario: null,
    error: error,
  })),

  on(fromUsuarioAction.CadastrarUsuarioSucces, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuarioAction.CadastrarUsuarioFail, (state, { error }) => ({
    ...state,
    usuario: null,
    error: error,
  })),

  on(fromUsuarioAction.EditarUsuarioSucces, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id === payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),
  on(fromUsuarioAction.EditarUsuarioFail, (state, { error }) => ({
    ...state,
    usuario: null,
    error: error,
  })),

  on(fromUsuarioAction.DeletarUsuarioSucces, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((row) => {
      row.id !== payload;
    }),
    error: '',
  })),
  on(fromUsuarioAction.DeletarUsuarioFail, (state, { error }) => ({
    ...state,
    usuario: null,
    error: error,
  }))
);

export function usuariosReducer(state = initialState, action: Action) {
  return _usuarioReducer(state, action);
}
