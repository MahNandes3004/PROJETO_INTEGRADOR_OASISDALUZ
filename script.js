// 1. GERENCIAMENTO DE FONTE
let fontScale = 100;

function changeFontSize(direction) {
    if (direction === 1 && fontScale < 140) {
        fontScale += 10;
    } else if (direction === -1 && fontScale > 80) {
        fontScale -= 10;
    }
    document.documentElement.style.setProperty('--font-scale', `${fontScale}%`);
}

// 2. ALTERNÂNCIA DE ALTO CONTRASTE
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

// 3. ANIMAÇÃO DOS FLASHCARDS
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// 4. LEITURA DE TELA / ÁUDIO DESCRIÇÃO
let isSpeaking = false;
let synth = window.speechSynthesis;

function toggleAudioDescription() {
    const btn = document.getElementById('btn-tts');

    if (!('speechSynthesis' in window)) {
        alert('Recurso de síntese de voz não suportado neste navegador.');
        return;
    }

    if (isSpeaking) {
        synth.cancel();
        isSpeaking = false;
        btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
    } else {
        const textToRead = document.querySelector('main').innerText;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.0;

        utterance.onend = () => {
            isSpeaking = false;
            btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
        };

        utterance.onerror = () => {
            isSpeaking = false;
            btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
        };

        synth.speak(utterance);
        isSpeaking = true;
        btn.innerHTML = 'Parar Áudio <i class="fa-solid fa-circle-stop"></i>';
    }
}