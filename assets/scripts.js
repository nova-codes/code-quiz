// create variables that select our document areas
var startButton = document.querySelector('.start-btn'),
    startScreen = document.querySelector('#start-screen'),
    quizDescription = document.querySelector('.quiz-start'),
    questionText = document.querySelector('.question-text'),
    answerDisplay = document.querySelector('.answer'),
    timerCount = document.querySelector('.timer-count'),
    scoreCount = document.querySelector('.score-count');

var quizQuestions = [
    {
        count: 1,
        question: "Javascript is a _____-side programming language.",
        answers: {
            a: 'Client',
            b: 'Server',
            c: 'Both',
            d: 'None'
        },
        correct: 'c'
    },
    {
        count: 2,
        question: "Which of the following will write 'Help' in an alert box?",
        answers: {
            a: 'alertBox("Help")',
            b: 'alert(Help)',
            c: 'alertText("Help")',
            d: 'alert("Help")'
        },
        correct: 'd'
    }
]

// hide the start screen when button clicked

function hideStart(){

    startButton.addEventListener('click', function(){
        if(startScreen.style.opacity = 1) {
            startScreen.style.opacity = 0;
            startScreen.style.zIndex = -1; 
        }
        else {
            console.log(startScreen.style.opacity); 
        }
    })
}

hideStart(); 

// begin timer

function timer() {
    var seconds = timerCount.textContent;

    var countdown = setInterval(function(){
        seconds--;
        timerCount.textContent = seconds;
        if(seconds <= 0) clearInterval(countdown);
    }, 1000); 
}

timer();

// show questions

