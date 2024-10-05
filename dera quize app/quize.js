function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
  }


const questions = [
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the closest planet to the sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Brazil", correct: false }
        ]
    },
    {
        question: "First element of periodic table?",
        answers: [
            { text: "Carbon", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Gold", correct: false }
        ]
    },
    {
        question: "Which continent is Egypt located in?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Europe", correct: false },
            { text: "South America", correct: false }
        ]
    },
   
    {
        question: "Which country is the smallest by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    questionElement.innerText = question.question;
    
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert('Quiz finished!');
    }
}

startGame();
