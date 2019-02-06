import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { LoadUsers } from '../../store/actions/usuarios.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public data$: any;

  constructor( private _store: Store<AppState> ) { }

  ngOnInit() {
    this.data$ = this._store.select('users');

    this._store.dispatch( new LoadUsers() );
  }

}
