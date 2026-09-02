// Controle do Tamanho da Fonte
let fontFactor = 1.0;
function changeFontSize(action) {
    if (action === 'increase' && fontFactor < 1.3) fontFactor += 0.08;
    if (action === 'decrease' && fontFactor > 0.85) fontFactor -= 0.08;
    document.body.style.fontSize = `${fontFactor}rem`;
}

// Controle de Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Leitura de Voz (Sintetizador nativo do navegador)
let isSpeaking = false;
function toggleVoice() {
    if ('speechSynthesis' in window) {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            document.getElementById('btn-voice').innerHTML = '<i class="fa-solid fa-volume-high"></i> Leitura de Voz';
        } else {
            const textToRead = document.querySelector('main').innerText;
            const utterance = new SpeechSynthesisUtterance(textToRead);
            utterance.lang = 'pt-BR';
            utterance.onend = () => {
                isSpeaking = false;
                document.getElementById('btn-voice').innerHTML = '<i class="fa-solid fa-volume-high"></i> Leitura de Voz';
            };
            window.speechSynthesis.speak(utterance);
            isSpeaking = true;
            document.getElementById('btn-voice').innerHTML = '<i class="fa-solid fa-square"></i> Parar Voz';
        }
    } else {
        alert("Seu navegador não suporta leitura de voz nativa.");
    }
}