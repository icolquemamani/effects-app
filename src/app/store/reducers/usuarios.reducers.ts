import * as fromUsers from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export function usersReducer( state= initState, action: fromUsers.acciones ): UsuariosState {
    switch( action.type ) {
        case fromUsers.LOAD_USERS:
            return {
                ...state,
                loading: true,
                error: null,
                users: []
            };
        case fromUsers.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                users: [ ...action.users ]
            };
        case fromUsers.LOAD_USERS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }
        default:
            return state;
    }
}