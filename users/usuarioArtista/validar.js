const UsuarioArtista = ("./usuarioArtista.js");

function validacao(user) {
    if(user.nome !== '' && user.sobrenome !== '' && user.email !== '' && user.estado !=='' && user.cidade !== '' && user.telefone !== '' && user.nicho !== ''){
        return true
    }
    else return false
}
let dados = {
    nome: "hvj",
    sobrenome:'we',
    email: 'dsdff',
    estado: 'sdaff',
    cidade:'sdfsf',
    telefone: 'sdffd',
    nicho: 'dffsdf'
};

console.log(validacao(dados))
