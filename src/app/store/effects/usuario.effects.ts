import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as actions from '../actions';
import { Observable } from "rxjs";
import { Action } from '@ngrx/store';
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor( private actions$: Actions,
                 private _usersService: UsuarioService ) {}

    @Effect()
    cargarUsuario$: Observable<Action> = this.actions$
                .pipe( 
                    ofType( actions.LOAD_USER ),
                    switchMap( action => this._usersService.getUserById( action['id'] )
                                        .pipe(
                                            map( user => new actions.LoadUserSuccess( user )),
                                            catchError( error => of(new actions.LoadUserFail( error )))
                                        ))
                );
}