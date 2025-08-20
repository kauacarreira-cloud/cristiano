// Função para trocar a imagem principal
function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
    document.getElementById('topImage').src = src.replace('400&h=300', '200&h=150');
}

// Função para mostrar informações sobre CR7
function changeTheme() {
    const panel = document.getElementById('infoPanel');
    panel.innerHTML = `
        <h3>⚽ SOBRE CR7</h3>
        <p>Considerado um dos maiores jogadores de futebol de todos os tempos.</p>
        <p>Nascido na Madeira, Portugal, em 5 de fevereiro de 1985.</p>
        <p>Jogou por clubes como Sporting, Manchester United, Real Madrid e Juventus.</p>
        <p>Recordista de gols em Copas do Mundo e Eurocopas.</p>
        <p>Conhecido por sua dedicação, disciplina e mentalidade vencedora.</p>
    `;
}

// Função para mostrar estatísticas detalhadas
function showStats() {
    const panel = document.getElementById('infoPanel');
    panel.innerHTML = `
        <h3>📊 ESTATÍSTICAS</h3>
        <p><strong>Jogos:</strong> 1100+</p>
        <p><strong>Gols:</strong> 850+</p>
        <p><strong>Assistências:</strong> 250+</p>
        <p><strong>Hat-tricks:</strong> 60+</p>
        <p><strong>Títulos:</strong> 35+</p>
        <p><strong>Seleção:</strong> 200+ jogos</p>
        <p><strong>Gols pela Seleção:</strong> 130+</p>
    `;
}

// Array com as imagens para rotação automática
const images = [
    'al.jpeg',
    'bola de ouro.jpeg',
    'cris.jpeg',
    'cristian.jpeg',
    'cristiano.jpeg'
];

// Variável para controlar a imagem atual
let currentImageIndex = 0;

// Rotação automática de imagens a cada 4 segundos
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeMainImage(images[currentImageIndex]);
}, 4000);

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
});