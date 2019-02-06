import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: reducers.UsuariosState,
    user:  reducers.UsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    user:  reducers.userReducer
}