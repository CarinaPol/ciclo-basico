document.getElementById("contenido1").style.display="none";
document.getElementById("contenido2").style.display="none";
document.getElementById("contenido3").style.display="none";

function muestra_oculta(id,idBoton) {
    let div = document.getElementById(id);
    let presionado = document.getElementById(idBoton);
    if (div.style.display=="none"){
       div.style.display="flex"
       presionado.textContent="-"       
    }
    else{
       div.style.display="none"
       presionado.textContent="+"       
    }
}