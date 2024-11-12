const textToType = "A digitação é uma habilidade importante para a comunicação moderna.";

let startTime;
let timerInterval;
let isTyping = false;

function startTypingTest(){
    isTyping = true; // O teste começa ao dar o foco
    clearInterval(timerInterval);

    document.getElementById('result').innerHTML = '';
    document.getElementById('timer').innerHTML = '15';

    const inputField = document.getElementById('inputField');

    inputField.value = '';
    inputField.focus();

    // Inicia o temporizador
    startTime = Date.now();  // Marca o início do tempo
    timerInterval = setInterval(updateTimer, 1000);  // Atualiza o timer a cada segundo
}

function updateTimer(){
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Tempo passado em segundos
    const remainingTime = 15 - elapsedTime; // Tempo restante

    document.getElementById('timer').innerHTML = remainingTime;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        finishTest(); // Finaliza o teste
    }
}

function finishTest(){
    isTyping = false; // Finaliza o teste
    const inputField = document.getElementById('inputField');

    const typedText = inputField.value.trim();  // Remove espaços extras
    const totalWords = typedText.split(' ').filter(word => word.length > 0).length; // Conta palavras
    const timeTaken = 15; // Tempo fixo de 15 segundos

    const speed = (totalWords / timeTaken) * 60; // Calcula a velocidade

    document.getElementById('result').innerHTML = `Você digitou ${totalWords} palavras em 15 segundos. Sua velocidade é de ${speed.toFixed(2)} palavras por minuto.`;
}

document.getElementById('inputField').addEventListener('focus', () => {
    if (!isTyping) {
        startTypingTest(); // Começa o teste quando o campo recebe o foco
    }
});

document.getElementById('textToType').innerHTML = textToType;