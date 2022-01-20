var textoIngresado     = document.querySelector(".text-input");
var btnEncriptacion    = document.querySelector("#btn-encriptar");
var btnDesencriptacion = document.querySelector("#btn-desencriptar");
var mensajeEncriptado  = document.querySelector("#msg");
var btnCopiar          = document.querySelector("#btn-copy");

btnEncriptacion.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoIngresado.value;
    textoEncriptado = texto.replaceAll("e", "enter")
                           .replaceAll("i", "imes")
                           .replaceAll("a", "ai")
                           .replaceAll("o", "ober")
                           .replaceAll("u", "ufat");
    
    mensajeEncriptado.value = textoEncriptado;
    textoIngresado.value = "";

});
btnDesencriptacion.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoIngresado.value;
    textoDesencriptado = texto.replaceAll("enter", "e")
                              .replaceAll("imes", "i")
                              .replaceAll("ai", "a")
                              .replaceAll("ober", "o")
                              .replaceAll("ufat", "u");
    
    mensajeEncriptado.value=textoDesencriptado;
    textoIngresado.value = "";

});
btnCopiar.addEventListener("click",function(event){
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoIngresado.focus();
    
});