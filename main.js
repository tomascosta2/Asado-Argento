const enviar = document.querySelector(".enviar");
const enviado = document.querySelector(".enviado");


enviar.addEventListener('click', e => {
    e.preventDefault();
    enviado.innerHTML = "Mensaje enviado correctamente";
});