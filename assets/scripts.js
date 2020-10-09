var i = 0; 

var quizQuestions = [
    {
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
        question: "Which of the following will write 'Help' in an alert box?",
        answers: {
            a: 'alertBox("Help")',
            b: 'alert(Help)', 
            c: 'alertText("Help")', 
            d: 'alert("Help")'
        },
        correct: 'd'
    }
];

var myQuiz = new quiz(quizQuestions, 30);

function answerButton(selection) {
    myQuiz.answerButton(selection);
}


function quiz(questions, timerBegin = 20) {
    /**
     * 1. questions
     * 2. each with four answers
     * 3. time
     * 4. reward with many score++
     * 5. top 10 local storage leaderboard
     * 6. penalties for incorrect answer (time--)
     **/

    // timer things
    let quizTimeSeconds = timerBegin,
        quizInterval = {},
        questionIndex = 0,
        questionTotal = quizQuestions.length,
        currentQuestion;

    let score = 0;

    // create variables that select our document areas
    let startButton = document.querySelector('.start-btn'),
        startScreen = document.querySelector('#start-screen'),
        questionCounter = document.querySelector('#q-counter'),
        questionText = document.querySelector('#question-text'),
        answerDisplay = document.querySelector('#answer-opt'),
        timerCount = document.querySelector('.timer-count'),
        scoreCount = document.querySelector('.score-count');

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
        let score = scoreCount;

        function addScore() {
            score += 10 + timer.textContent;
        }
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
    }

    return {
        answerButton: answerButton
    };
}


// this is at the top with all my other global variables
var timerCount = document.querySelector('.timer-count');

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