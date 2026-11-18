const formLogin = document.getElementById("formLogin");

const paginaPassou = new URL("passou.html", document.currentScript.src).href;

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if (
        usuario === "Hkk23%%0ma##*sd**$2bNao##vai1&DESCOBRIR@MUAHAHAHHA%" &&
        senha === "P@Arade3er*&%!nteliGent3@>:("
    ) {
        window.location.href = paginaPassou;
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
});
