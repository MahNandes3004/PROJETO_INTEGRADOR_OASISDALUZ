document.addEventListener('DOMContentLoaded', () => {

    // 1. ROTAÇÃO DOS FLASHCARDS (VIRAR CARTA)
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // 2. CONTROLE DE TAMANHO DA FONTE (A+ / A-)
    let currentFontSize = 100;
    
    window.changeFontSize = function(delta) {
        currentFontSize += delta * 10;
        if (currentFontSize < 80) currentFontSize = 80;
        if (currentFontSize > 150) currentFontSize = 150;
        document.body.style.fontSize = currentFontSize + '%';
    };

    // 3. ALTERNÂNCIA DE ALTO CONTRASTE
    window.toggleHighContrast = function() {
        document.body.classList.toggle('dark-theme');
    };

    // 4. ÁUDIO DESCRIÇÃO & LEITOR DE TELA (WEB SPEECH API)
    let voices = [];
    let isSpeaking = false;

    function loadVoices() {
        if ('speechSynthesis' in window) {
            voices = window.speechSynthesis.getVoices();
        }
    }

    if ('speechSynthesis' in window) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    window.toggleAudioDescription = function() {
        const btn = document.getElementById('btn-tts');

        if (!('speechSynthesis' in window)) {
            alert('Seu navegador não suporta a síntese de voz.');
            return;
        }

        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            if (btn) btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
        } else {
            window.speechSynthesis.cancel();
            
            const mainContent = document.querySelector('main');
            if (!mainContent) return;

            const utterance = new SpeechSynthesisUtterance(mainContent.innerText);
            utterance.lang = 'pt-BR';
            
            const ptVoice = voices.find(voice => voice.lang.includes('pt-BR') || voice.lang.includes('pt'));
            if (ptVoice) {
                utterance.voice = ptVoice;
            }

            utterance.onend = function() {
                isSpeaking = false;
                if (btn) btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
            };

            utterance.onerror = function() {
                isSpeaking = false;
                if (btn) btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
            };

            window.speechSynthesis.speak(utterance);
            isSpeaking = true;
            if (btn) btn.innerHTML = 'Parar Áudio <i class="fa-solid fa-circle-stop"></i>';
        }
    };
});