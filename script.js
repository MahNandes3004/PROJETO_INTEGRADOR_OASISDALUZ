document.addEventListener('DOMContentLoaded', () => {

    // 1. ROTAÇÃO DOS FLASHCARDS
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('flipped');
        });
    });

    // 2. CONTROLE DE FONTE (A+ / A-)
    let currentFontSize = 100;
    const btnAumentar = document.querySelector('button[title="Aumentar Fonte"]');
    const btnDiminuir = document.querySelector('button[title="Diminuir Fonte"]');

    if (btnAumentar) {
        btnAumentar.addEventListener('click', () => {
            if (currentFontSize < 150) {
                currentFontSize += 10;
                document.body.style.fontSize = currentFontSize + '%';
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', () => {
            if (currentFontSize > 80) {
                currentFontSize -= 10;
                document.body.style.fontSize = currentFontSize + '%';
            }
        });
    }

    // 3. ALTO CONTRASTE
    const btnContraste = document.querySelector('button[title="Alternar Alto Contraste"]');
    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // 4. ÁUDIO DESCRIÇÃO (WEB SPEECH API)
    const btnAudio = document.getElementById('btn-tts');
    let isSpeaking = false;
    let voices = [];

    function loadVoices() {
        if ('speechSynthesis' in window) {
            voices = window.speechSynthesis.getVoices();
        }
    }

    if ('speechSynthesis' in window) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    if (btnAudio) {
        btnAudio.addEventListener('click', () => {
            if (!('speechSynthesis' in window)) {
                alert('Seu navegador não suporta a síntese de voz.');
                return;
            }

            if (isSpeaking) {
                window.speechSynthesis.cancel();
                isSpeaking = false;
                btnAudio.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
            } else {
                window.speechSynthesis.cancel();
                
                const mainContent = document.querySelector('main');
                if (!mainContent) return;

                const utterance = new SpeechSynthesisUtterance(mainContent.innerText);
                utterance.lang = 'pt-BR';
                
                const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt'));
                if (ptVoice) utterance.voice = ptVoice;

                utterance.onend = () => {
                    isSpeaking = false;
                    btnAudio.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
                };

                utterance.onerror = () => {
                    isSpeaking = false;
                    btnAudio.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
                };

                window.speechSynthesis.speak(utterance);
                isSpeaking = true;
                btnAudio.innerHTML = 'Parar Áudio <i class="fa-solid fa-circle-stop"></i>';
            }
        });
    }
});