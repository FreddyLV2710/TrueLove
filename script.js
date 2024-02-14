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
