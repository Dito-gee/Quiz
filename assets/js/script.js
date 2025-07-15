// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // DOM Element references 
    // Cache DOM Element references for better performance and readability
    const questionText = document.getElementById('question-text');
    const answerList = document.getElementById('answer-options');
    const questionCounter = document.getElementById('question-counter');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');
    // Quiz Questions data
    // Array containing all quiz questions, possible answers, and correct answer index
    const questions = [
        {
            question: "What is the best type of paint to use in a high-moisture area like a bathroom?",
            answers: ["Latex paint", "Oil-based paint", "Epoxy paint", "Chalk paint"],
            correct: 2
        },
        {
            question: "What is the purpose of primer before painting?",
            answers: [
                "To add color to the wall",
                "To seal the surface and improve paint adhesion",
                "To make the paint dry faster",
                "To create a textured surface"
            ],
            correct: 1
        },
        {
            question: "What is the recommended drying time between coats of latex paint?",
            answers: ["30 minutes", "2-4 hours", "24 hours", "1 week"],
            correct: 1
        },
        {
            question: "Which of these is NOT a common wallpaper hanging tool?",
            answers: ["Smoothing brush", "Seam roller", "Wallpaper trough", "Paint thinner"],
            correct: 3
        },
        {
            question: "What is the best way to prepare a glossy surface for repainting?",
            answers: [
                "Wash with soap and water",
                "Sand lightly to dull the surface",
                "Apply primer directly",
                "All of the above"
            ],
            correct: 3
        }
    ];