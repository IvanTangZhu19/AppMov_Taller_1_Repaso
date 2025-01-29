document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');

    // Función para actualizar el contador
    const updateCounter = () => {
        const count = textInput.value.length;
        charCount.textContent = `${count} ${count === 1 ? 'carácter' : 'caracteres'}`;
    };

    // Event listener para entrada de texto
    textInput.addEventListener('input', updateCounter);
    
    // Actualizar contador al cargar la página
    updateCounter();
});