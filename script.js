// Controle do tamanho da fonte
let fontSizeLevel = 0;
function adjustFont(direction) {
    fontSizeLevel += direction;
    if (fontSizeLevel > 3) fontSizeLevel = 3;
    if (fontSizeLevel < -2) fontSizeLevel = -2;
    
    const root = document.documentElement;
    const newSize = 100 + (fontSizeLevel * 10);
    root.style.fontSize = newSize + '%';
}

// Controle do Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}