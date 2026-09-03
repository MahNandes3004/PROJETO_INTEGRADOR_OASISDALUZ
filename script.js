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

// ROTAÇÃO DOS FLASHCARDS
function flipCard(card) {
    card.classList.toggle('flipped');
}

// CARREGAMENTO SEGURO DE VOZES DA SÍNTESE
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

// ÁUDIO DESCRIÇÃO E LEITURA DE TELA
let isSpeaking = false;

function toggleAudioDescription() {
    const btn = document.getElementById('btn-tts');

    if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta a síntese de voz.');
        return;
    }

    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
    } else {
        window.speechSynthesis.cancel(); // Limpa leituras anteriores pendentes
        
        const mainContent = document.querySelector('main').innerText;
        const utterance = new SpeechSynthesisUtterance(mainContent);
        
        // Garante idioma em português do Brasil
        utterance.lang = 'pt-BR';
        
        // Tenta associar uma voz em pt-BR disponível
        const ptVoice = voices.find(voice => voice.lang.includes('pt-BR') || voice.lang.includes('pt'));
        if (ptVoice) {
            utterance.voice = ptVoice;
        }

        utterance.onend = function() {
            isSpeaking = false;
            btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
        };

        utterance.onerror = function() {
            isSpeaking = false;
            btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
        };

        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
        btn.innerHTML = 'Parar Áudio <i class="fa-solid fa-circle-stop"></i>';
    }
}