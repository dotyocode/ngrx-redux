import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css'],
})
export class CadastrarUsuariosComponent implements OnInit, OnChanges {
  @Input() userValue: any = null;
  @Output() cadastrarUsuario: EventEmitter<any> = new EventEmitter<any>();
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null, Validators.required],
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      perfil: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userValue'] && changes['userValue'].currentValue) {
      this.formulario.patchValue(changes['userValue'].currentValue);
    }
  }

  onSubmit() {
    this.cadastrarUsuario.emit(this.formulario.value);
  }

  marcarCamposComoTocados() {
    Object.values(this.formulario.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
