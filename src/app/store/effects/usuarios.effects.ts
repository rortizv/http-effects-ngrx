import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { tap, mergeMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';


@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            tap(data => console.log('effect tap', data)),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        tap(users => console.log('getUsers effect tap', users)),
                        mergeMap(
                            users => [
                                usuariosActions.cargarUsuariosSuccess({ usuarios: users })
                            ]
                        
        )
    ))));


}