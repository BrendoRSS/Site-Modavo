/* salvar login e senha */
//Tem como ativar o botão de duas formas, abaixo eu mostro as mesmas
// essa primeira você tem que pegar o id do botão, criar uma variável e utilizar o addeventlistener 
var btn = document.getElementById('btn')
btn.addeventlistener("click", function () {
    var login = document.getElementById('login')
    localStorage.setItem("login", login)

    var senha = document.getElementById('senha')
    localStorage.setItem("senha", senha)
})
/* nessa segunda, voce tem que lá no html colocar "onclick="validacao( )"" para chamar a função. 
NÃO ESQUECER DOS PARÊNTESES!!!*/

function validacao() {
    var login = document.getElementById('login')
    //abaixo o local guardar a informação do login
    localStorage.setItem("login", login)
    //abaixo o local guardar a informação da senha
    var senha = document.getElementById('senha')
    localStorage.setItem("senha", senha)
}

/* validar login */
//abaixo o local pega a informação do login e salva na variável
var loginsalvo = localStorage.getItem("login")
//abaixo o local pega a informação da senha e salva na variável
var senhasalva = localStorage.getItem("senha")
var c_login = document.getElementById('c_login').value
var c_senha = document.getElementById('c_senha').value

//faz a validação do login, utilizando o oniput lá no input do html (oniput="validarlogin()") 
function validarlogin() {
    if (loginsalvo == c_login) {
        return true
    } else {
        return false
    }
}
//faz a validação da senha, utilizando o oniput lá no input do html (oniput="validarsenha()") 
function validarsenha() {
    if (senhasalva == c_senha) {
        return true
    } else {
        return false
    }
}

//faz a validação do acesso, analisando se os campos retornam "true"
// utilizando o onclick lá no botao do html (onclick="validaracesso()") 
function validaracesso() {
    var res = document.getElementById('resultado')
    if (validarlogin() && validarsenha() == true) {
        res.innerHTML = 'Cadastro realizado com sucesso, direcionando para a tela inicial...'
    } else {

    }
}


