// Controle do Modo Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isContrast);
}

// Controle do Tamanho da Fonte
let currentFontSize = 16;

function changeFontSize(step) {
    currentFontSize += step * 2;
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 24) currentFontSize = 24;
    document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
}

function resetFontSize() {
    currentFontSize = 16;
    document.documentElement.style.setProperty('--font-size-base', '16px');
}

// Animação do Disco de Newton
function spinDisk() {
    const disk = document.getElementById('newton-disk');
    disk.classList.add('spinning');
    setTimeout(() => {
        disk.classList.remove('spinning');
    }, 2000);
}

// Interatividade dos Flashcards
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
    const isFlipped = cardElement.classList.contains('flipped');
    cardElement.setAttribute('aria-pressed', isFlipped);
}

// Preservar Preferência de Contraste ao Recarregar
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
});