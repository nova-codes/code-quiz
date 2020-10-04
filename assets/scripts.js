// create variables that select our document areas
var startButton = document.querySelector('.start-btn'),
    startScreen = document.querySelector('#start-screen'),
    quizDescription = document.querySelector('.quiz-start');

// hide the start screen when button clicked



function hideStart(){

    startButton.addEventListener('click', function(){
        if(startScreen.style.opacity = 1) {
            startScreen.style.opacity = 0;
            console.log(startScreen.style.opacity); 
        }
        else {
            console.log(startScreen.style.opacity); 
        }
    })
}

hideStart(); 

