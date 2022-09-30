export class UsuarioArtista {
    constructor(nome, sobrenome, email, estado, cidade, telefone, nicho){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.email = email,
        this.estado = estado,
        this.cidade = cidade,
        this.telefone = telefone,
        this.nicho = nicho
    }
}


const persona = new UsuarioArtista('danilo', 'vicente', 'dv@hotmail.', 'PE', 'Rec', '9999', 'arte')


