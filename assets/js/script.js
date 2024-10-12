// Vaciar los campos del formulario al cargar la página
window.onload = function () {
    document.getElementById('miFormulario').reset();
};

// iframe
let player;

// Función que se llama cuando la API de YouTube está lista
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': function (event) {
                event.target.playVideo(); // Asegura que el video se reproduzca automáticamente
            }
        }
    });
}

// Manejo del evento clic del botón
document.getElementById('skipButton').onclick = function () {
    const overlay = document.getElementById('videoOverlay');
    overlay.style.display = 'none';

    // Pausar el video
    if (player) {
        player.pauseVideo(); // Pausa el video
    }
};

   