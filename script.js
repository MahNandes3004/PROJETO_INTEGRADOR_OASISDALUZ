// Aguarda o carregamento completo da página para evitar falhas de leitura
window.addEventListener('DOMContentLoaded', () => {

    // 1. Controle de Contraste
    const btnContrast = document.getElementById('btn-contrast');
    if (btnContrast) {
        btnContrast.onclick = function(e) {
            e.preventDefault();
            document.body.classList.toggle('high-contrast');
            const ativo = document.body.classList.contains('high-contrast');
            localStorage.setItem('oasis_contrast', ativo);
        };
    }

    if (localStorage.getItem('oasis_contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // 2. Controle de Fontes (A+ / A-)
    let tamanhoAtual = 16;
    const btnMais = document.getElementById('btn-font-increase');
    const btnMenos = document.getElementById('btn-font-decrease');

    if (btnMais) {
        btnMais.onclick = function(e) {
            e.preventDefault();
            if (tamanhoAtual < 22) {
                tamanhoAtual++;
                document.documentElement.style.fontSize = tamanhoAtual + 'px';
            }
        };
    }

    if (btnMenos) {
        btnMenos.onclick = function(e) {
            e.preventDefault();
            if (tamanhoAtual > 13) {
                tamanhoAtual--;
                document.documentElement.style.fontSize = tamanhoAtual + 'px';
            }
        };
    }

    // 3. Flashcards (Usa pointerdown para responder instantaneamente no toque do celular)
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.onpointerdown = function(e) {
            e.preventDefault();
            card.classList.toggle('flipped');
        };
    });

    // 4. Disco de Newton
    const btnSpin = document.getElementById('btn-spin');
    const disk = document.getElementById('newton-disk');

    if (btnSpin && disk) {
        btnSpin.onpointerdown = function(e) {
            e.preventDefault();
            disk.classList.remove('spinning');
            void disk.offsetWidth; // Reinicia a animação CSS do giro
            disk.classList.add('spinning');
        };
    }

    // 5. Áudiodescrição (Speech Synthesis)
    const botoesAudio = document.querySelectorAll('.btn-audio');
    botoesAudio.forEach(botao => {
        botao.onclick = function(e) {
            e.preventDefault();
            const idAlvo = botao.getAttribute('data-audio-target');
            const elementoTexto = document.getElementById(idAlvo);
            
            if (elementoTexto && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const fala = new SpeechSynthesisUtterance(elementoTexto.innerText);
                fala.lang = 'pt-BR';
                fala.rate = 0.95;
                window.speechSynthesis.speak(fala);
            } else {
                alert('Áudio indisponível neste navegador.');
            }
        };
    });

});