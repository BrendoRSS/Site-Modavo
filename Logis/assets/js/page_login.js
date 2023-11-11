//vai comparar o login informado e o do localStorage

submit_login.addEventListener("click", function (event) {
    const loginsalvo = localStorage.getItem("login");
    const senhasalva = localStorage.getItem("senha");
    const c_login = document.getElementById('c_login');
    const n_senha = document.getElementById('n_senha');
    const bloco_login = document.getElementById('bloco_login');
    const body_login = document.getElementById('body');
    let imgload = document.getElementById('imgload');
    let respost = document.getElementById('res2')

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
    if (validarAcessoLogin() && validarAcessoSenha() != false) {
        respost.innerHTML = 'Login efetuado com sucesso! Direcionando para a página inicial...'
        /*window.location.href = ("home.html");*/
        bloco_login.style.display = 'none';
        body_login.style.background = 'white';
    }else{
        respost.innerHTML = 'Tudo errado!'
    }
})