// Função para adicionar o efeito de fade nos títulos
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Atraso para cada elemento, para que apareçam um de cada vez
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`; // Atraso em 0.5s entre cada título
    });
});
