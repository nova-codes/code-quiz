var i = 0;

var quizQuestions = [
    {
        ask: "Javascript is a _____-side programming language.",
        answers: {
            a: 'Client',
            b: 'Server',
            c: 'Both',
            d: 'None'
        },
        correct: 'c'
    },
    {
        ask: "Which of the following will write 'Help' in an alert box?",
        answers: {
            a: 'alertBox("Help")',
            b: 'alert(Help)', 
            c: 'alertText("Help")', 
            d: 'alert("Help")'
        },
        correct: 'd'
    },
    {
        ask: "Which operator will return the value of the remainder?",
        answers: {
            a: '%',
            b: '!', 
            c: 'R', 
            d: '+'
        },
        correct: 'a'
    }
];

// create variables that select our document areas
let startButton = document.querySelector('.start-btn'),
    startScreen = document.querySelector('#start-screen'),
    questionCounter = document.querySelector('#q-counter'),
    questionText = document.querySelector('#question-text'),
    answerDisplay = document.querySelector('#answer-opt'),
    timerCount = document.querySelector('.timer-count'),
    scoreCount = document.querySelector('.score-count'),
    endScreen = document.querySelector('#end-screen'),
    finalScore = document.querySelector('#final-score'),
    score = scoreCount.textContent,
    quizTimeSeconds = 0,
    quizInterval = {},
    questionIndex = 0,
    questionTotal = quizQuestions.length,
    currentQuestion;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    if(startScreen.style.opacity = 1) {
        startScreen.style.opacity = 0;
        startScreen.style.zIndex = -1; 
    }
    else {
        console.log(startScreen.style.opacity); 
    }
    startTimer();
    askNextQuestion();
}

function startTimer() {
    quizTimeSeconds = 60;
    quizInterval = setInterval(timer, 1000);
}

function timer() {
    quizTimeSeconds--;
    timerCount.textContent = quizTimeSeconds;
    if(quizTimeSeconds <= 0) {
        timerExpire();
    }

}

function timerExpire() {
    clearInterval(quizInterval);
    gameOver();
}

// question 1/n, 2/n ... etc.
function questionNumber() {
    questionCounter.textContent = questionIndex + 1; 
}

// show the question
function displayQuestion(question) {
    questionText.innerHTML = question.ask;
}

// go to the next question
function askNextQuestion() {
    currentQuestion = quizQuestions[questionIndex];

    if(questionIndex >= questionTotal) {
        gameOver();
    } else {
        
        displayQuestion(currentQuestion);
        displayAnswers(currentQuestion);
        questionNumber();

        questionIndex++; 
    }
}

// put the answers in the buttons
function displayAnswers(question) {
    answerDisplay.innerHTML = getAnswers(question); 
}

// retrieve answer values from quizQuestions
function getAnswers(question) {
    var returnValue = '';

    for(var letterKey in question.answers) {
        var answer = question.answers[letterKey];

        returnValue += generateButtons(letterKey, answer);

    }
    return returnValue;
}

// make the buttons 
function generateButtons(letterKey, answer) {
   var createButton = document.createElement('button');

    createButton.id = letterKey;
    createButton.className = 'answer';
    createButton.innerHTML = letterKey + '. ' + answer;
    createButton.setAttribute('onclick', 'checkAnswer("'+ letterKey +'")');

    // createButton.addEventListener('click', checkAnswer); 

    return createButton.outerHTML;
    
    //.addEventListener('click', askNextQuestion);
}

function checkAnswer(selection) {  

    if(selection === currentQuestion.correct) {        
        score = quizTimeSeconds;
        quizTimeSeconds += 10;
        console.log(selection);
    } else {
        quizTimeSeconds - 10;
        console.log("no");
    }

    askNextQuestion(); 

}

function gameOver() {
    endScreen.style.opacity = 1;
    endScreen.style.zIndex = 3;
    finalScore.textContent = score;
}

// leaderboard
/**
 * user time at completion
 * user score at completion
 * user initials 
 * submit button idk
 */

 function highScore(userTime, userScore, userName) {
    return {
        time: userTime,
        score: userScore,
        name: userName
    }
 }