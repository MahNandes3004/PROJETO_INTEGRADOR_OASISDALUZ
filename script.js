// Controle de Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('oasis_contrast', isContrast);
}

// Controle de Tamanho de Fonte
let fontSizePx = 16;

function changeFontSize(delta) {
    fontSizePx += delta;
    if (fontSizePx < 13) fontSizePx = 13;
    if (fontSizePx > 22) fontSizePx = 22;
    document.documentElement.style.setProperty('--font-scale', `${fontSizePx}px`);
}

// Animação do Disco de Newton
function spinDisk() {
    const disk = document.getElementById('newton-disk');
    disk.classList.add('spinning');
    setTimeout(() => {
        disk.classList.remove('spinning');
    }, 2500);
}

// Virar Flashcard
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// Lembrar preferência de contraste
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('oasis_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
});