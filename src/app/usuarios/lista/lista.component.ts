import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public $users: any;

  constructor( private _userService: UsuarioService ) { }

  ngOnInit() {
    this.$users = this._userService.getUsers();
  }

}
