import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/store/app.state';
import * as fromUsuarioAction from '../../states/store/usuarios/usuario.actions';
import * as fromUsuarioSelector from '../../states/store/usuarios/usuario.selectors';
import { UsuariosModel } from 'src/app/utils/models/usuarios-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  // listUser: UsuariosModel[] = [];
  listUser$: Observable<UsuariosModel[]> = this.store.select(
    fromUsuarioSelector.getUsuarios
  );

  isEdit: boolean = false;
  valueEdit: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.store.dispatch(fromUsuarioAction.LoadUsuarios());
  }

  onEditarUsuario(event: any) {
    this.store.dispatch(
      fromUsuarioAction.LoadUsuario({ payload: event.usuario.id })
    );
  }

  onExcluirUsuario(event: any) {
    this.store.dispatch(
      fromUsuarioAction.DeletarUsuario({ payload: event.id })
    );
  }

  cadastro(event: UsuariosModel) {
    this.store.dispatch(fromUsuarioAction.CadastrarUsuario({ payload: event }));
  }

  editar(event: UsuariosModel) {
    this.store.dispatch(fromUsuarioAction.EditarUsuario({ payload: event }));
    this.isEdit = false;
    this.valueEdit = null;
  }
}
