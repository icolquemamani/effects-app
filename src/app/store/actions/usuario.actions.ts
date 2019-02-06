import { Action } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const LOAD_USER = '[User] Cargar usuario';
export const LOAD_USER_FAIL = '[User] Cargar usuario Fail';
export const LOAD_USER_SUCCESS = '[User] Cargar usuario Success';

export class LoadUser implements Action {
    readonly type = LOAD_USER;

    constructor( public id: string ) {}
}

export class LoadUserFail implements Action {
    readonly type = LOAD_USER_FAIL;

    constructor( public payload: any ) {}
}

export class LoadUserSuccess implements Action {
    readonly type = LOAD_USER_SUCCESS;

    constructor( public user: Usuario ) {}
}

export type ususarioAcciones = LoadUser | LoadUserFail | LoadUserSuccess;