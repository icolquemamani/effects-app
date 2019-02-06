import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { LoadUser } from '../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public data$: any;

  constructor( private _route: ActivatedRoute,
               private _store:Store<AppState> ) { }

  ngOnInit() {
    this.data$ = this._store.select('user');
    
    this._route.params.subscribe( params => {
      const id = params['id'];

      this._store.dispatch( new LoadUser(id) );
    });
  }

}
