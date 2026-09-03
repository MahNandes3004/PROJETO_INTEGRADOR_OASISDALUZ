// 1. Controle de Alto Contraste
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

    // 2. Controle do Tamanho da Fonte
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

    // 3. Animação do Disco de Newton
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

    // 4. Giro dos Flashcards
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

});

// 5. Função de Áudiodescrição por Voz Nativa
function playAudio(elementId) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Cancela falas anteriores
        const utterance = new SpeechSynthesisUtterance(textElement.innerText);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Seu navegador não possui suporte para síntese de voz.');
    }
}