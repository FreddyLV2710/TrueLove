document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    // Función para cambiar la imagen al hacer clic
    function changeImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    // Agregar evento de clic a cada imagen
    images.forEach(image => {
        image.addEventListener('click', changeImage);
    });

    // Mostrar la primera imagen al cargar la página
    images[currentIndex].style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Reproducir la música de fondo automáticamente cuando el usuario interactúa
    document.addEventListener('click', function() {
        playBackgroundMusic();
    });

    // Función para reproducir la música de fondo
    function playBackgroundMusic() {
        // Verifica si el navegador permite la reproducción automática
        const playPromise = backgroundMusic.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // La reproducción se inició correctamente
            }).catch(error => {
                // La reproducción no se pudo iniciar
                console.error('Error al reproducir música:', error);
            });
        }
    }

    // Inicializar la reproducción de música
    playBackgroundMusic();
});

