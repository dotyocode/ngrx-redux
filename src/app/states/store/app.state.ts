import { ActionReducerMap } from '@ngrx/store';
import { UsuariosState } from 'src/app/utils/models/usuarioState-model';
import { usuariosReducer } from './usuarios/usuario.reducer';
import { UsuariosEffects } from './usuarios/usuario.effects';

export interface AppState {
  usuarios: UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: usuariosReducer,
};

export const appEffects = [UsuariosEffects];
