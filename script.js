document.addEventListener("DOMContentLoaded", () => {
    const carta = document.getElementById("carta");
    const mensaje = document.getElementById("mensaje");
    
    function abrirCarta() {
        console.log("Carta tocada"); // Verifica si se activa el evento en la consola
        carta.innerHTML = '<img src="carta-abierta.png" alt="Carta abierta" class="carta-imagen">';

        // Ocultar el texto "Ábreme"
        const textoAbreme = document.querySelector(".texto-abreme");
        if (textoAbreme) textoAbreme.style.display = "none";

        // Mostrar el mensaje después de 1 segundo
        setTimeout(() => {
            mensaje.style.opacity = "1";
        }, 1000);

        // Lanzar flores
        for (let i = 0; i < 8; i++) {
            lanzarFlor();
        }
    }

    // Añadir eventos de clic y toque (para móviles)
    carta.addEventListener("click", abrirCarta);
    carta.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Evita el doble toque en móviles
        abrirCarta();
    });
});



function lanzarFlor() {
    const flor = document.createElement("img");
    flor.src = "flor.png"; // Usa la imagen correcta
    flor.classList.add("rosa");

    // Posición aleatoria en la parte superior
    flor.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(flor);

    // Eliminar la rosa después de caer
    setTimeout(() => {
        flor.remove();
    }, 5000);
}




