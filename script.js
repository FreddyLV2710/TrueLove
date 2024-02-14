// Obtener la referencia a la imagen
const romanticImage = document.querySelector('.image-container img');

// Agregar un evento de clic a la imagen
romanticImage.addEventListener('click', function() {
    // Cambiar la imagen al hacer clic
    if (this.src.includes('imagen_romantica.jpg')) {
        this.src = 'otra_imagen.jpg';
    } else {
        this.src = 'imagen_romantica.jpg';
    }
});
