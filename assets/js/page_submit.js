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

//valida o nome
function validarNome() {
    if (campos[0].value.length < 16 || campos[0].value.length > 60) {
        return false
    }
    else {
        let nome = campos[0].value
        localStorage.setItem("nome", campos[0].value)
        return true
    }
}
// formata o CPF de acordo com a norma padrão
function formataCPF(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value

    let cpfAtualizado;

    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function (regex, argumento1, argumento2, argumento3, argumento4) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
        })
    elementoAlvo.value = cpfAtualizado;
}
// valida o login
function validarLogin() {

    if (campos[4].value.length == 6) {
        let login = campos[4].value
        localStorage.setItem("login", campos[4].value)
        return true
    } else {
        return false
    }

}
//valida a senha
function validarSenha() {
    let numeros = 0;
    if (campos[5].value.length == 8) {
        numeros = 0

        //Esse "for" analisa cada elemento da senha digitada e verifica se possui numeração
        for (i = 0; i <= 9; i++) {
            if (campos[5].value.indexOf(Number(i)) != -1) {
                numeros = numeros + 1
            }
        }
        //se tiver número ele retorna falso
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
//valida a confirmação de senha
function validarCSenha() {
    if (campos[5].value == campos[6].value) {
        return true
    } else {
        return false
    }
}

const forms = document.getElementById('form')
forms.addEventListener("submit", function (event) {        
        // Impede o comportamento padrão de envio do formulário         
        event.preventDefault();         
        // Chama a função para validar o formulário         
        validarForm();     
})

//Valida se todo o forms foi cadastrado corretamente
function validarForm() {
    let res = document.getElementById('resultado')
    if (validarNome() && validarLogin() && validarSenha() && validarCSenha() == true) {
        document.getElementById('resultado').style.color = 'white'  
        document.getElementById('resultado').style.textAlign = 'center'
        document.getElementById('resultado').style.background = '#0E1D34'
        document.getElementById('resultado').style.border = '2px'
        document.getElementById('resultado').style.borderRadius = '5px'   
        document.getElementById('resultado').style.display = 'flex'
        document.getElementById('resultado').style.justifyContent = 'center'   
        document.getElementById('resultado').style.fontSize = '20px';
        res.innerHTML = 'Cadastro Realizado! Direcionando para a página de login...'
        setTimeout(function () {
            window.location.href = "../page_login.html"
        }, 5000);
    } else {
        document.getElementById('resultado').style.color = 'red' 
        document.getElementById('resultado').style.background = '#0E1D34'
        document.getElementById('resultado').style.border = '2px'
        document.getElementById('resultado').style.borderRadius = '5px'   
        document.getElementById('resultado').style.display = 'flex'
        document.getElementById('resultado').style.justifyContent = 'center'   
        document.getElementById('resultado').style.fontSize = '20px';
        res.innerHTML = '[ERROR404] - Avalie as informações cadastradas'
    }
}

// ========= BUSCADOR DE CEP ======= //
let cep = document.getElementById('txtCEP');
function buscaCep() {
    let cep = document.getElementById('txtCEP');
    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep.value;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);

                document.getElementById("txtBairro").value = endereco.neighborhood;
                document.getElementById("txtCidade").value = endereco.city;
                document.getElementById("txtEstado").value = endereco.state;
                document.getElementById("txtRua").value = endereco.street;
            }
        }
    }
}





