document.addEventListener('DOMContentLoaded', () => {
    
    // Alto Contraste
    const btnContrast = document.getElementById('btn-contrast');
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            const isContrast = document.body.classList.contains('high-contrast');
            localStorage.setItem('oasis_contrast', isContrast);
        });
    }

    // Carregar preferência de contraste
    if (localStorage.getItem('oasis_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Aumento/Diminuição de fonte
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

    // Giro do Disco de Newton
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

    // Virar Flashcard
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

});