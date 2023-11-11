const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const submit_login = document.getElementById('submit_login')
const submit_cadastro = document.getElementById('submit_login')

/*
Lista de campos:
campos[0] = Nome
campos[1] = Telefone Celular
campos[2] = Telefone Fixo
campos[3] = Código Postal
campos[4] = Login
campos[5] = Senha
campos[6] = Confirme Senha
 


 */

function validarNome(){
    if (campos[0].value.length < 16 || campos[0].value.length > 60) {
        return false
    }
    else {
        let nome = campos[0].value
        localStorage.setItem("nome", campos[0].value)
        console.log(nome)
        return true
    }
}

function validarLogin() {

    if (campos[4].value.length == 6) {
        let login = campos[4].value
        localStorage.setItem("login", campos[4].value)
        console.log(login)
        return true
    } else {
        return false
    }
}

function validarSenha() {
    let numeros = 0;
    if (campos[5].value.length == 8) {
        numeros = 0
        for (i = 0; i <= 9; i++) {
            if (campos[5].value.indexOf(Number(i)) != -1) {
                numeros = numeros + 1
            }
        }
        if (numeros > 0) {
            return false
        } else {
            let senha = campos[5].value
            localStorage.setItem("senha", campos[5].value)
            return true
        }
    } else {
        return false
    }
}

function validarCSenha() {
    if (campos[5].value == campos[6].value) {
        return true
    } else {
        return false
    }
}
//Valida se todo o forms foi cadastrado corretamente
function validarForm() {
    let res = document.getElementById('resultado')
    if (validarNome() && validarLogin() && validarSenha() && validarCSenha() == true) {
        res.innerHTML = 'Cadastro realizado com sucesso! Redirecionando para login...'

        //Redireciona o usuário para a página de login após 5 segundos
        setTimeout(function() {
            window.location.href = "page_login.html"
        }, 5000);
    } else {
        res.innerHTML = '[ERROR404] - Avalie as informações cadastradas'
    }
}

// ========= BUSCADOR DE CEP ======= //
let cep = document.getElementById('txtCEP');
function buscaCep(){
    let cep = document.getElementById('txtCEP');
    if (cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep.value;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);

                document.getElementById("txtBairro").value = endereco.neighborhood;
                document.getElementById("txtCidade").value = endereco.city;
                document.getElementById("txtEstado").value = endereco.state;
                document.getElementById("txtRua").value = endereco.street;
            }else if(req.status === 404){
                alert("CEP inválido")

            }else{
                alert("Erro ao fazer a requisição")
            }
        }
    }
}
window.onload = function(){
    let txtCep = documento.getElementById("txtCep");
    txtCep.addEventListener("blur", buscaCep)
}





