import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsuariosState } from "src/app/utils/models/usuarioState-model";

/*
  Seletores busca o ultimo estado da aplicacao
*/

const _usuarioSelector = createFeatureSelector<UsuariosState>(
  'usuarios'
)

export const getUsuarios = createSelector(
  _usuarioSelector, (state: UsuariosState) => {
    return state.usuarios
  }
)

export const getUsuariosAdmin = createSelector(
  _usuarioSelector, (state: UsuariosState) => {
    return state.usuarios.filter((item) => item.perfil === "Administrador")
  }
)

export const getUsuariosIdadeMaior = createSelector(
  _usuarioSelector, (state: UsuariosState) => {
    return state.usuarios.filter((item) => item.idade >= 30)
  }
)

export const getUsuariosErro = createSelector(
  _usuarioSelector, (state: UsuariosState) => {
    return state.error
  }
)

export const getUsuario = createSelector(
  _usuarioSelector, (state: UsuariosState) => {
    return state.usuario
  }
)

export const getUsuarioErro = createSelector(
  _usuarioSelector, (state: UsuariosState) => {
    return state.error
  }
)
