const textToType = "A digitação é uma habilidade importante para a comunicação moderna. "

let startTime;
let timerInterval;
let isTyping = false;

function startTypingTest(){
    isTyping = false
    clearInterval(timerInterval)


    document.getElementById('result').innerHTML = ''
    document.getElementById('timer').innerHTML = '15'


    const inputField = document.getElementById('inputField');

    inputField.value = ''
    inputField.focus();
}

function upateTimer(){
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    const remainingTime = 15 - elapsedTime;

    document,getElementById('timer').innerHTML = remainingTime;

    if(remainingTime <= 0){
        clearInterval(timerInterval);
        finishTest();
    }
}

function finishTest(){
    isTyping = false
    const inputField = document.getElementById('inputField')

    const typedText = inputField.value.trim();

    const totalWords = typedText.split(' ').filter(word => word.length > 0).length
    const timeTaken = 15



    const speed = (totalWords / timeTaken) * 60

    document.getElementById('inputField').innerHTML =` Você diogitou ${totalWords} palavras em 15 segundos. Sua velocidade é de ${speed.toFixed(2)} palavras por minito.`

}

document.getElementById('inputField').addEventListener('focus', () => {
    if(!isTyping){
        isTyping = true;
        startTypingTest();
    }
})


document.getElementById('textToType').innerHTML = textToType;