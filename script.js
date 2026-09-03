// CONTROLE DE TAMANHO DA FONTE
let currentFontSize = 100;

function changeFontSize(delta) {
    currentFontSize += delta * 10;
    if (currentFontSize < 80) currentFontSize = 80;
    if (currentFontSize > 150) currentFontSize = 150;
    document.body.style.fontSize = currentFontSize + '%';
}

// TOGGLE DE ALTO CONTRASTE
function toggleHighContrast() {
    document.body.classList.toggle('dark-theme');
}

// NAVEGAÇÃO / ROTAÇÃO DOS FLASHCARDS
function flipCard(card) {
    card.classList.toggle('flipped');
}

// ÁUDIO DESCRIÇÃO E LEITURA DE TELA (WEB SPEECH API)
let isSpeaking = false;

function toggleAudioDescription() {
    const btn = document.getElementById('btn-tts');

    if ('speechSynthesis' in window) {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
        } else {
            const mainContent = document.querySelector('main').innerText;
            const utterance = new SpeechSynthesisUtterance(mainContent);
            utterance.lang = 'pt-BR';
            
            utterance.onend = function() {
                isSpeaking = false;
                btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
            };

            window.speechSynthesis.speak(utterance);
            isSpeaking = true;
            btn.innerHTML = 'Parar Áudio <i class="fa-solid fa-circle-stop"></i>';
        }
    } else {
        alert('Seu navegador não suporta a síntese de voz para áudio descrição.');
    }
}