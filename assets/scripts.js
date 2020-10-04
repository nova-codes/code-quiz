// create variables that select our document areas
var startButton = document.querySelector('.start-btn'),
    startScreen = document.querySelector('#start-screen'),
    quizDescription = document.querySelector('.quiz-start'),
    timerCount = document.querySelector('.timer-count'),
    scoreCount = document.querySelector('.score-count');

var quizQuestions = [
    {
        count: 1,
        question: "Javascript is a _____-side programming language.",
        answerA: 'Client',
        answerB: 'Server',
        answerC: 'Both',
        answerD: 'Neither',
        correct: answerC
    },
    {
        count: 2,
        question: "Which of the following will write 'Help' in an alert box?",
        answerA: 'alertBox("Help")',
        answerB: 'alert(Help)',
        answerC: 'alertUser("Help")',
        answerD: 'alert("Help")',
        correct: answerD
    },
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