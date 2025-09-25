// Configuração da data alvo (28 de setembro)
let targetDate = new Date(new Date().getFullYear(), 8, 28).getTime(); // Setembro é o mês 8 (0-indexed)

// Se a data já passou este ano, define para o próximo ano
if (Date.now() > targetDate) {
    targetDate = new Date(new Date().getFullYear() + 1, 8, 28).getTime();
}

// Atualiza o contador a cada segundo
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // Se a contagem regressiva terminar
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "<div class='message'><p class='message__text'>Feliz Aniversário!</p></div>";
    }
}, 1000);

// Cria partículas flutuantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Tamanho aleatório
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Posição inicial aleatória
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        // Duração da animação aleatória
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Atraso aleatório
        particle.style.animationDelay = `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);
    }
}

// Inicializa as partículas quando a página carrega
window.addEventListener('load', createParticles);