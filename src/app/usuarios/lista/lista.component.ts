import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(cargarUsuarios());
    // this.usuarioService.getUsers()
    //   .subscribe(users => {
    //     console.log(users);
    //     this.usuarios = users;
    //   });
  }

}
