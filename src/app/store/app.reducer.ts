import { ActionReducerMap } from '@ngrx/store';
import * as reducers from '../../app/store/reducers/usuarios.reducer';


export interface AppState {
    usuarios: reducers.UsuariosState;
}



export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer
}