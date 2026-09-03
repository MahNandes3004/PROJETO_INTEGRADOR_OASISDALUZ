 document.addEventListener('DOMContentLoaded', () => {

    // 1. Alto Contraste (Persistente)
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

    // 2. Aumentar e Diminuir Fonte (A+ / A-)
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

    // 3. Virar os Flashcards (Compatível com toque no celular e clique)
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach((card) => {
        const toggleFlip = (e) => {
            e.preventDefault();
            card.classList.toggle('flipped');
        };
        card.addEventListener('click', toggleFlip);
        card.addEventListener('touchstart', toggleFlip, { passive: false });
    });

    // 4. Giro do Disco de Newton (Força o reset da animação CSS)
    const btnSpin = document.getElementById('btn-spin');
    const newtonDisk = document.getElementById('newton-disk');

    if (btnSpin && newtonDisk) {
        const spinAction = (e) => {
            e.preventDefault();
            newtonDisk.classList.remove('spinning');
            void newtonDisk.offsetWidth; // Força o navegador a reiniciar a animação
            newtonDisk.classList.add('spinning');
        };

        btnSpin.addEventListener('click', spinAction);
        btnSpin.addEventListener('touchstart', spinAction, { passive: false });
    }

    // 5. Áudiodescrição por Síntese de Voz Nativa
    const audioButtons = document.querySelectorAll('.btn-audio');
    audioButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-audio-target');
            playAudio(targetId);
        });
    });
});

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