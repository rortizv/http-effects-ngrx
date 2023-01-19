import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';

export interface UsuariosState {
    users: [],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, { usuarios }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios as []]
    })),
    on(cargarUsuariosError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function usuariosReducer(state: any, action: any) {
    return _usuariosReducer(state, action);
}