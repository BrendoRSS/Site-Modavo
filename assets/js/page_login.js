//vai comparar o login informado e o do localStorage
let submit_login = document.getElementById('submit_login')
const loginsalvo = localStorage.getItem("login");
const senhasalva = localStorage.getItem("senha");
const c_login = document.getElementById('c_login')
const n_senha = document.getElementById('n_senha')
const respost = document.getElementById('resultado')

function validarAcessoLogin() {
    if (loginsalvo == c_login.value) {
        return true
    } else {
        return false
    }
}

function validarAcessoSenha() {
    if (senhasalva == n_senha.value) {
        return true
    } else {
        return false
    }
}
function validarAcesso(){
    if (validarAcessoLogin() && validarAcessoSenha() == true) {
        document.getElementById('resultado').style.color = 'green'  
        document.getElementById('resultado').style.textAlign = 'center'
        document.getElementById('resultado').style.background = 'white'
        document.getElementById('resultado').style.border = '2px'
        document.getElementById('resultado').style.borderRadius = '5px'   
        document.getElementById('resultado').style.display = 'flex'
        document.getElementById('resultado').style.justifyContent = 'center'   
        document.getElementById('resultado').style.fontSize = '20px';

        localStorage.setItem("loginativo", c_login.value)
        respost.innerHTML = 'Login efetuado com sucesso! Direcionando para a página inicial...'
        setTimeout(function () {
            window.location.href = "index.html"
        }, 5000);
    } else {
        document.getElementById('resultado').style.color = 'red' 
        document.getElementById('resultado').style.background = '#0E1D34'
        document.getElementById('resultado').style.border = '2px'
        document.getElementById('resultado').style.borderRadius = '5px'   
        document.getElementById('resultado').style.display = 'flex'
        document.getElementById('resultado').style.justifyContent = 'center'   
        document.getElementById('resultado').style.fontSize = '20px';
        respost.innerHTML = 'Login ou senha incorretos!'
    }
    
}
