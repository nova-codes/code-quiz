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
    timerBegin = 60,
    quizTimeSeconds = timerBegin,
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
    askNextQuestion();
    startTimer();
}

function startTimer() {
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

    displayQuestion(currentQuestion);
    displayAnswers(currentQuestion);
    questionNumber();

    questionIndex++;
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

    createButton.addEventListener('click', askNextQuestion); 

    return createButton.outerHTML;
    
    //.addEventListener('click', askNextQuestion);
}





/** 
function renderQuestion(question) {
    questionText.textContent = question.question;
}

function askNextQuestion() {
    currentQuestion = questions[questionIndex];

    renderQuestion(currentQuestion);
    renderAnswers(currentQuestion);
    renderQuestionCounter();

    questionIndex++;
}

function renderQuestionCounter() {
    questionCounter.textContent = questionIndex + 1;
}

function renderAnswers(question) {
    answerDisplay.innerHTML = getAnswers(question);
}

function getAnswers(question) {
    var returnValue = "";
    
    for(var letterKey in question.answers) {
        var answer = question.answers[letterKey];
        
        returnValue += getAnswer(letterKey, answer);
    }
    return returnValue;
}

function getAnswer(letterKey, answer) { // this is so ugly, like me lmfao   
    return `<li class="answer" onclick="answerButton('${letterKey}')"> ${answer} </li>`
}

function scoreCounter() {

}

function checkAnswer(selection) {  
    // x user selects answer
    // check that answer is correct
    // if answer is correct - reward user
    // if answer incorrect - penalize user
    
    if(currentQuestion.correct === selection) {
        
        // addTime(); 
    } else {
        // subtractScore();
        // subtractTime(); 
        console.log('try again');
    }

    console.log(selection);

}

function answerButton(selection) {
    checkAnswer(selection);
    askNextQuestion();
} */