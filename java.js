// Função para trocar a imagem principal
function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
    document.getElementById('topImage').src = src.replace('600&h=400', '200&h=150');
}

// Função para abrir página Sobre
function goToAbout() {
    document.getElementById('aboutPage').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Impede scroll da página principal
}

// Função para abrir página Estatísticas  
function goToStats() {
    document.getElementById('statsPage').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Impede scroll da página principal
}

// Função para fechar qualquer página overlay
function closePage() {
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('statsPage').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll da página principal
}

// Fechar página ao clicar fora do conteúdo
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('page-overlay')) {
        closePage();
    }
});

// Fechar página com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePage();
    }
});

// Array com as imagens para rotação automática
const images = [
    'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop&crop=face'
];

// Variável para controlar a imagem atual
let currentImageIndex = 0;

// Rotação automática de imagens a cada 4 segundos
let autoRotate = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeMainImage(images[currentImageIndex]);
}, 4000);

// Pausar rotação quando uma página estiver aberta
function pauseAutoRotate() {
    clearInterval(autoRotate);
}

// Retomar rotação quando página for fechada
function resumeAutoRotate() {
    autoRotate = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        changeMainImage(images[currentImageIndex]);
    }, 4000);
}

// Modificar funções para pausar/retomar rotação
const originalGoToAbout = goToAbout;
const originalGoToStats = goToStats;
const originalClosePage = closePage;

goToAbout = function() {
    originalGoToAbout();
    pauseAutoRotate();
}

goToStats = function() {
    originalGoToStats();
    pauseAutoRotate();
}

closePage = function() {
    originalClosePage();
    resumeAutoRotate();
}

// Animação dos cards de estatísticas
function animateStatCards() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        if (!isNaN(finalValue)) {
            let currentValue = 0;
            const increment = Math.ceil(finalValue / 50);
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = stat.textContent; // Mantém formato original
                    clearInterval(timer);
                } else {
                    stat.textContent = currentValue + (stat.textContent.includes('+') ? '+' : '');
                }
            }, 30);
        }
    });
}

// Inicialização quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site do Cristiano Ronaldo carregado com sucesso! 🏆');
    
    // Adicionar efeitos sonoros aos cliques (opcional)
    const buttons = document.querySelectorAll('.btn, .side-image');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Feedback visual adicional
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Animar cards quando página de stats abrir
    const statsBtn = document.querySelector('.btn[onclick="goToStats()"]');
    if (statsBtn) {
        statsBtn.addEventListener('click', function() {
            setTimeout(animateStatCards, 500);
        });
    }

    // Adicionar efeito parallax suave
    document.addEventListener('mousemove', function(e) {
        const mainImage = document.querySelector('.main-image');
        if (mainImage) {
            const x = (e.clientX / window.innerWidth) * 10 - 5;
            const y = (e.clientY / window.innerHeight) * 10 - 5;
            mainImage.style.transform = translateX(${x}px) translateY(${y}px);
        }
    });
});

// Função para criar efeito de partículas (opcional)
function createParticles() {
    const container = document.querySelector('.inner-container');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(particle);
    }
}

// Adicionar keyframes para animação das partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
`;
document.head.appendChild(style);

//