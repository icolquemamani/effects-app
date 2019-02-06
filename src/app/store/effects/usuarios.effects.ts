import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as actions from '../actions';
import { Observable } from "rxjs";
import { Action } from '@ngrx/store';
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions,
                 private _usersService: UsuarioService ) {}

    @Effect()
    cargarUsuarios$: Observable<Action> = this.actions$
                                              .pipe( 
                                                  ofType( actions.LOAD_USERS ),
                                                  switchMap( () => this._usersService.getUsers()
                                                                       .pipe(
                                                                           map( users => new actions.LoadUsersSuccess( users )),
                                                                           catchError( error => of(new actions.LoadUsersFail( error )))
                                                                       ))
                                              );
}