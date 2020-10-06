// create variables that select our document areas
var startButton = document.querySelector('.start-btn'),
    startScreen = document.querySelector('#start-screen'),
    quizDescription = document.querySelector('.quiz-start'),
    questionText = document.querySelector('#question-text'),
    answerDisplay = document.querySelector('.answer'),
    timerCount = document.querySelector('.timer-count'),
    scoreCount = document.querySelector('.score-count');

var i = 0; 

var quizQuestions = [
    {
        count: 1,
        question: "Javascript is a _____-side programming language.",
        answers: [
            {text: 'Client', correct: false},
            {text: 'Server', correct: false},
            {text: 'Both', correct: true},
            {text: 'None', correct: false}
        ]
    },
    {
        count: 2,
        question: "Which of the following will write 'Help' in an alert box?",
        answers: [
            {text: 'alertBox("Help")', correct: false},
            {text: 'alert(Help)', correct: false},
            {text: 'alertText("Help")', correct: false},
            {text: 'alert("Help")', correct: true}
        ]
    }
]

// hide the start screen when button clicked

function hideStart(){
        if(startScreen.style.opacity = 1) {
            startScreen.style.opacity = 0;
            startScreen.style.zIndex = -1; 
        }
        else {
            console.log(startScreen.style.opacity); 
        }
        timer();
        displayQuestions();

    };

    startButton.addEventListener('click', hideStart);

// begin timer

function timer() {
    var seconds = timerCount.textContent;

    var countdown = setInterval(function(){
        seconds--;
        timerCount.textContent = seconds;
        if(seconds <= 0) clearInterval(countdown);
    }, 1000); 
}

// show questions
function displayQuestions(questionText) {
    questionText.textContent = quizQuestions[i].question; 

    var quizAnswers = Object.values(quizQuestions[i].answers[text]);

    answerDisplay.textContent = quizAnswers;

}