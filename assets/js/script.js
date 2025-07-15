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
    // Quiz State variables
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 60;
    let timer;
    // Initialize Quiz - Initializes or resets the quiz to its starting state
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        scoreElement.textContent = score;
        resetTimerStyles();
        showQuestion();
    }
    // ====================
    // Timer Functions
    // ====================
    // Resets the timer's visual styles to default
    function resetTimerStyles() {
        timerElement.style.color = '';
        timerElement.style.fontWeight = '';
        timerElement.style.textShadow = '';
    }

    // Starts a countdown timer for the current question
    function startQuestionTimer() {
        timeLeft = 60;
        timerElement.textContent = timeLeft;

        // Clear any existing timer to prevent multiple timers running
        clearInterval(timer);

        // Start new timer interval (updates every second)
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            // Add visual warning when time is running low
            if (timeLeft <= 10) {
                timerElement.style.color = '#FF1744';
                timerElement.style.fontWeight = '900';
                timerElement.style.textShadow = '0 0 8px rgba(255, 23, 68, 0.8)';
            }

            // Handle when time runs out completely
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeOut();
            }
        }, 1000);
    }

    // Handles what happens when time runs out for a question
    function handleTimeOut() {
        const currentQuestion = questions[currentQuestionIndex];
        disableQuizInteraction();

        // Show correct answer
        const answerItems = answerList.querySelectorAll('.answer-item');
        answerItems[currentQuestion.correct].classList.add('correct');

        // Move to next question after delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        }, 1500);
    }
    // ====================
    // Quiz Interaction
    // ====================
    // Disables all interactive elements to prevent answering after selection/timeout
    function disableQuizInteraction() {
        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.disabled = true;
        });

        const answerItems = answerList.querySelectorAll('.answer-item');
        answerItems.forEach(item => {
            item.style.pointerEvents = 'none';
        });
    }