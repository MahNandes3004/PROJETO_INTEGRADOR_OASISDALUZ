/* 1. LÓGICA DE ACESSIBILIDADE */

// Aumento/Diminuição de Fonte
let currentFontSizeFactor = 1.0;
const rootElement = document.documentElement; // html

function changeFontSize(action) {
    if (action === 'increase' && currentFontSizeFactor < 1.4) {
        currentFontSizeFactor += 0.1;
    } else if (action === 'decrease' && currentFontSizeFactor > 0.8) {
        currentFontSizeFactor -= 0.1;
    }
    // Aplica o novo tamanho de fonte usando porcentagem no HTML
    rootElement.style.fontSize = `${currentFontSizeFactor * 100}%`;
}

// Alternar Alto Contraste
const toggleContrastBtn = document.getElementById('toggle-contrast');

toggleContrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isContrastEnabled = document.body.classList.contains('high-contrast');
    toggleContrastBtn.innerHTML = isContrastEnabled ? 'Alto Contraste (ON) <i class="fa-solid fa-circle-half-stroke"></i>' : 'Alto Contraste <i class="fa-solid fa-circle-half-stroke"></i>';
});

// Alternar Leitura de Voz (Placeholder)
const toggleVoiceBtn = document.getElementById('toggle-voice');

toggleVoiceBtn.addEventListener('click', () => {
    // Isso é um placeholder para funcionalidade real de voz.
    toggleVoiceBtn.classList.toggle('active');
    if (toggleVoiceBtn.classList.contains('active')) {
        alert("Recurso de Voz Ativado (Pré-visualização). Requer integração da Web Speech API para funcionalidade completa.");
        toggleVoiceBtn.innerHTML = 'Voz (ON) <i class="fa-solid fa-ear-listen"></i>';
    } else {
        toggleVoiceBtn.innerHTML = 'Voz/Audiodescrição <i class="fa-solid fa-ear-listen"></i>';
    }
});


/* 2. LÓGICA INTERATIVA */

// Virar Flashcards
function flipCard(cardContainer) {
    cardContainer.classList.toggle('flipped');
    
    const cardBack = cardContainer.querySelector('.card-back');
    const isFlipped = cardContainer.classList.contains('flipped');
    
    // Atualiza atributos ARIA para leitores de tela
    cardBack.setAttribute('aria-hidden', !isFlipped);
}


/* 3. INICIALIZAÇÃO */

// Remove a classe "js-loading" para ativar transições
window.onload = function() {
    document.documentElement.classList.remove('js-loading');
};