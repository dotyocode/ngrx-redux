import { UsuariosModel } from './usuarios-model';

export interface UsuariosState {
  usuarios: UsuariosModel[],
  usuario: UsuariosModel | null,
  error: string | ''
}
