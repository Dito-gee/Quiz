// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // DOM Element references - Cache DOM Element references for better performance and readability
    const questionText = document.getElementById('question-text');
    const answerList = document.getElementById('answer-options');
    const questionCounter = document.getElementById('question-counter');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');