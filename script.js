window.addEventListener('DOMContentLoaded', () => {

    // 1. Alto Contraste
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

    // 2. Aumento e Diminuição de Fonte Real
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
            if (tamanhoAtual > 13) {
                tamanhoAtual -= 1.5;
                document.body.style.fontSize = tamanhoAtual + 'px';
            }
        };
    }

    // 3. Flashcards Interativos (Garante a troca correta entre Frente e Verso)
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.onclick = () => {
            card.classList.toggle('flipped');
        };
    });

    // 4. Disco de Newton
    const btnSpin = document.getElementById('btn-spin');
    const disk = document.getElementById('newton-disk') || document.querySelector('.disk');

    if (btnSpin && disk) {
        btnSpin.onclick = () => {
            disk.classList.remove('spinning');
            void disk.offsetWidth; 
            disk.classList.add('spinning');
        };
    }

    // 5. Áudiodescrição (Speech Synthesis com ativação por toque)
    const botoesAudio = document.querySelectorAll('.btn-audio');
    botoesAudio.forEach(botao => {
        botao.onclick = () => {
            const idAlvo = botao.getAttribute('data-audio-target');
            const elementoTexto = document.getElementById(idAlvo);
            
            if (elementoTexto && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const fala = new SpeechSynthesisUtterance(elementoTexto.innerText);
                fala.lang = 'pt-BR';
                fala.rate = 0.95;
                window.speechSynthesis.speak(fala);
            } else {
                alert('O seu navegador não suporta a leitura de voz por áudio.');
            }
        };
    });

});