// 1. Controle de Alto Contraste
    const btnContrast = document.getElementById('btn-contrast');
    if (btnContrast) {
        btnContrast.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('high-contrast');
            const isContrast = document.body.classList.contains('high-contrast');
            localStorage.setItem('oasis_contrast', isContrast);
        });
    }

    if (localStorage.getItem('oasis_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // 2. Controle do Tamanho da Fonte (Aumentar / Diminuir)
    let fontSizePx = 16;
    const btnIncrease = document.getElementById('btn-font-increase');
    const btnDecrease = document.getElementById('btn-font-decrease');

    if (btnIncrease) {
        btnIncrease.addEventListener('click', (e) => {
            e.preventDefault();
            if (fontSizePx < 22) {
                fontSizePx += 1;
                document.documentElement.style.fontSize = `${fontSizePx}px`;
            }
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener('click', (e) => {
            e.preventDefault();
            if (fontSizePx > 13) {
                fontSizePx -= 1;
                document.documentElement.style.fontSize = `${fontSizePx}px`;
            }
        });
    }

    // 3. Giro dos Flashcards
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // 4. Animação do Disco de Newton
    const btnSpin = document.getElementById('btn-spin');
    const newtonDisk = document.getElementById('newton-disk');

    if (btnSpin && newtonDisk) {
        btnSpin.addEventListener('click', (e) => {
            e.preventDefault();
            newtonDisk.classList.add('spinning');
            setTimeout(() => {
                newtonDisk.classList.remove('spinning');
            }, 2500);
        });
    }
});

// 5. Função Global de Áudiodescrição por Voz (Acessibilidade)
function playAudio(elementId) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const textToSpeak = textElement.innerText || textElement.textContent;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Seu navegador não suporta a síntese de voz nativa.');
    }
}