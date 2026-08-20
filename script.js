// Variable para controle do tamanho de fonte
let currentFontSize = 100;

function changeFontSize(delta) {
  currentFontSize += delta * 10;
  if (currentFontSize < 70) currentFontSize = 70;
  if (currentFontSize > 150) currentFontSize = 150;
  document.body.style.fontSize = currentFontSize + "%";
}

// Alternar Alto Contraste
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

// Leitor de Áudio para Acessibilidade Visual (Web Speech API)
let synth = window.speechSynthesis;

function readPageText() {
  stopSpeech();
  const textToRead = document.getElementById("main-content").innerText;
  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = "pt-BR";
  utterance.rate = 1.0;
  synth.speak(utterance);
}

function stopSpeech() {
  if (synth.speaking) {
    synth.cancel();
  }
}

// Lógica do Disco de Newton no Canvas
const canvas = document.getElementById("newtonCanvas");
const ctx = canvas.getContext("2d");
const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
let currentAngle = 0;
let isSpinning = false;
let spinSpeed = 0;

function drawDisk(angle) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.width / 2 - 5;
  const sliceAngle = (2 * Math.PI) / colors.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < colors.length; i++) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle + i * sliceAngle, angle + (i + 1) * sliceAngle);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.closePath();
  }
}

function spinNewtonDisk() {
  if (isSpinning) return;
  isSpinning = true;
  spinSpeed = 0.8; // Velocidade inicial alta para desfocar as cores

  function animate() {
    currentAngle += spinSpeed;
    drawDisk(currentAngle);
    spinSpeed *= 0.98; // Desaceleração suave

    if (spinSpeed > 0.02) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      drawDisk(0); // Volta à posição original
    }
  }
  animate();
}

// Renderização inicial do disco
drawDisk(0);