import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/store/app.state';
import { UsuariosModel } from 'src/app/utils/models/usuarios-model';
import * as fromUsuarioAction from '../../states/store/usuarios/usuario.actions';
import * as fromUsuarioSelector from '../../states/store/usuarios/usuario.selectors';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent {
  @Input() usuarios: any;
  @Output() editarUsuario: EventEmitter<any> = new EventEmitter<any>();
  @Output() excluirUsuario: EventEmitter<any> = new EventEmitter<any>();

  listUserId$: Observable<UsuariosModel | null> = this.store.select(
    fromUsuarioSelector.getUsuario
  );

  @ViewChild('editModal') editModal!: ElementRef;

  constructor(private store: Store<AppState>) {}

  editar(usuario: any) {
    const valores: any = {
      usuario: usuario,
      type: 'editar',
    };

    this.editarUsuario.emit(valores);
  }

  excluir(usuario: any) {
    this.excluirUsuario.emit(usuario);
  }

  editar2(event: UsuariosModel) {
    this.store.dispatch(fromUsuarioAction.EditarUsuario({ payload: event }));
    this.closeModal();
  }

  closeModal() {
    const modalElement = this.editModal.nativeElement;
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
    modalElement.addEventListener('hidden.bs.modal', () => {
      document
        .querySelectorAll('.modal-backdrop')
        .forEach((backdrop) => backdrop.remove());
    });
  }
}
