window.addEventListener('DOMContentLoaded', () => {
    // Contraste
    const btnContrast = document.getElementById('btn-contrast');
    if (btnContrast) {
        btnContrast.onclick = () => {
            document.body.classList.toggle('high-contrast');
            localStorage.setItem('oasis_contrast', document.body.classList.contains('high-contrast'));
        };
    }
    if (localStorage.getItem('oasis_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Fontes A+ e A-
    let tamanhoAtual = 16;
    const btnMais = document.getElementById('btn-font-increase');
    const btnMenos = document.getElementById('btn-font-decrease');

    if (btnMais) {
        btnMais.onclick = () => {
            if (tamanhoAtual < 22) {
                tamanhoAtual += 1.5;
                document.body.style.fontSize = tamanhoAtual + 'px';
            }
        };
    }
    if (btnMenos) {
        btnMenos.onclick = () => {
            if (tamanhoAtual > 12) {
                tamanhoAtual -= 1.5;
                document.body.style.fontSize = tamanhoAtual + 'px';
            }
        };
    }

    // Flashcards (Virar ao toque)
    document.querySelectorAll('.flashcard').forEach(card => {
        card.onclick = () => {
            card.classList.toggle('flipped');
        };
    });

    // Disco de Newton
    const btnSpin = document.getElementById('btn-spin');
    const disk = document.getElementById('newton-disk');
    if (btnSpin && disk) {
        btnSpin.onclick = () => {
            disk.classList.remove('spinning');
            void disk.offsetWidth;
            disk.classList.add('spinning');
        };
    }

    // Áudio
    document.querySelectorAll('.btn-audio').forEach(botao => {
        botao.onclick = () => {
            const idAlvo = botao.getAttribute('data-audio-target');
            const elementoTexto = document.getElementById(idAlvo);
            if (elementoTexto && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const fala = new SpeechSynthesisUtterance(elementoTexto.innerText);
                fala.lang = 'pt-BR';
                window.speechSynthesis.speak(fala);
            }
        };
    });
});