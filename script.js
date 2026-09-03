document.addEventListener('DOMContentLoaded', () => {

    // 1. Alto Contraste
    const btnContrast = document.getElementById('btn-contrast');
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            const isContrast = document.body.classList.contains('high-contrast');
            localStorage.setItem('oasis_contrast', isContrast);
        });
    }

    if (localStorage.getItem('oasis_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // 2. Tamanho da Fonte
    let fontSizePx = 16;
    const btnIncrease = document.getElementById('btn-font-increase');
    const btnDecrease = document.getElementById('btn-font-decrease');

    if (btnIncrease && btnDecrease) {
        btnIncrease.addEventListener('click', () => {
            if (fontSizePx < 22) fontSizePx += 1;
            document.documentElement.style.setProperty('--font-scale', `${fontSizePx}px`);
        });

        btnDecrease.addEventListener('click', () => {
            if (fontSizePx > 13) fontSizePx -= 1;
            document.documentElement.style.setProperty('--font-scale', `${fontSizePx}px`);
        });
    }

    // 3. Giro do Disco de Newton
    const btnSpin = document.getElementById('btn-spin');
    const newtonDisk = document.getElementById('newton-disk');

    if (btnSpin && newtonDisk) {
        btnSpin.addEventListener('click', () => {
            newtonDisk.classList.add('spinning');
            setTimeout(() => {
                newtonDisk.classList.remove('spinning');
            }, 2500);
        });
    }

    // 4. Interatividade dos Flashcards
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

});

// 5. Síntese de Voz para Áudiodescrição (Funciona sem precisar de arquivos externos)
function playAudio(elementId) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Para leituras anteriores
        const utterance = new SpeechSynthesisUtterance(textElement.innerText);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.95; // Velocidade confortável
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Seu navegador não suporta a síntese de áudio nativa.');
    }
}