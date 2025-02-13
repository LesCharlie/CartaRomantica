document.addEventListener("DOMContentLoaded", function () {
    let carta = document.getElementById("carta");
    let imagenCarta = document.getElementById("imagenCarta");
    let contenidoCarta = document.getElementById("contenidoCarta");

    function abrirCarta() {
        imagenCarta.style.display = "none"; // Esconde la imagen de la carta
        contenidoCarta.style.display = "block"; // Muestra el contenido de la carta
    }

    // 📱 Detectar toque o clic
    carta.addEventListener("click", abrirCarta);
    carta.addEventListener("touchstart", abrirCarta);
});


