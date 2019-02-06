export class Usuario {
    public id: number;
    public first_name: string;
    public last_name: string;
    public avatar: string;

    constructor( public usuarioData: UsuarioData ) {}
}

interface UsuarioData {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}