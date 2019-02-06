import { Action } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const LOAD_USERS = '[Users] Cargar usuarios';
export const LOAD_USERS_FAIL = '[Users] Cargar usuarios Fail';
export const LOAD_USERS_SUCCESS = '[Users] Cargar usuarios Success';

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;

    constructor( public payload: any ) {}
}

export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor( public users: Usuario[] ) {}
}

export type acciones = LoadUsers | LoadUsersFail | LoadUsersSuccess;