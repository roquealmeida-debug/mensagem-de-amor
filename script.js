const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
const audioEstourado = document.getElementById('audio-estourado');
const gifAmor = document.getElementById('gif-amor');

const frases = [
    "Para de ser idiota",
    "Você é um imbecil",
    "Seu cérebro é do tamanho de uma ervilha",
    "Sua inteligência é questionável",
    "Você é tão esperto quanto uma porta",
    "Sua burrice é impressionante",
    "Você consegue ser mais idiota?",
    "Sua estupidez não tem limites",
    "Parabéns por ser o rei dos idiotas",
    "Sua idiotice é um talento especial"
];

botao.addEventListener('click', () => {
    botao.disabled = true;
    mensagem.style.opacity = 0;
    gifAmor.style.display = 'none';
    
    // Reproduzir o áudio
    audioEstourado.play();
    
    setTimeout(() => {
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        mensagem.textContent = fraseAleatoria;
        mensagem.style.opacity = 1;
        
        // Mostrar o GIF
        gifAmor.style.display = 'block';
        
        botao.disabled = false;
    }, 500);
});

// Ajustar o volume do áudio para um efeito "estourado"
audioEstourado.volume = 1; // Ajuste este valor conforme necessário
