import * as fromUser from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

export function userReducer( state= initState, action: fromUser.ususarioAcciones ): UsuarioState {
    switch( action.type ) {
        case fromUser.LOAD_USER:
            return {
                ...state,
                loading: true,
                error: null,
                user: null
            };
        case fromUser.LOAD_USER_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                user: {...action.user}
            };
        case fromUser.LOAD_USER_FAIL:
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