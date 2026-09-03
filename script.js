// ==========================================
// 1. CONTROLE DE TAMANHO DA FONTE
// ==========================================
let currentFontSize = 100;

function changeFontSize(delta) {
    currentFontSize += delta * 10;
    if (currentFontSize < 80) currentFontSize = 80;
    if (currentFontSize > 150) currentFontSize = 150;
    document.body.style.fontSize = currentFontSize + '%';
}

// ==========================================
// 2. ALTERNÂNCIA DE ALTO CONTRASTE (TEMA ESCURO)
// ==========================================
function toggleHighContrast() {
    document.body.classList.toggle('dark-theme');
}

// ==========================================
// 3. ROTAÇÃO DOS FLASHCARDS (VIRAR CARTA)
// ==========================================
function flipCard(card) {
    card.classList.toggle('flipped');
}

// ==========================================
// 4. ÁUDIO DESCRIÇÃO & LEITOR DE TELA (WEB SPEECH API)
// ==========================================
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
        if (btn) btn.innerHTML = 'Áudio Descrição <i class="fa-solid fa-volume-high"></i>';
    } else {
        window.speechSynthesis.cancel(); // Cancela falas anteriores na fila
        
        const mainContent = document.querySelector('main');
        if (!mainContent) return;

        const utterance = new SpeechSynthesisUtterance(mainContent.innerText);
        
        // Define o idioma em português do Brasil
        utterance.lang = 'pt-BR';
        
        // Seleciona uma voz em PT-BR disponível no sistema
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
}