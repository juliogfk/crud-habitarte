const UsuarioComum = require("./usuarioComum")

function validacao(user) {
    if(user.nome !== '' && user.sobrenome !== '' && user.email !== '' && user.nicho !== ''){
        return true
    }
    return false
}
let a = {
    nome: "hvj",
    sobrenome:'we',
    email: 'dsdff',
    nicho: 'dffsdf'
};

console.log(validacao(a))