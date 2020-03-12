//get the html element that is going to be manipulated
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var result = document.getElementById("result");
var questionCounterText = document.getElementById("progress");
var scoreText = document.getElementById("score");
var timerText = document.getElementById("timer");

//initialise variables
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let secondsLeft = 45;

//Constant variables
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 7;

//create an array of the questions
var questions = [
    {
      "question": "Inside which HTML element do we put the JavaScript??",
      "choice1": "<script>",
      "choice2": "<javascript>",
      "choice3": "<js>",
      "choice4": "<scripting>",
      "answer": 1
    },
    {
      "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
      "choice1": "<script href='xxx.js'>",
      "choice2": "<script name='xxx.js'>",
      "choice3": "<script src='xxx.js'>",
      "choice4": "<script file='xxx.js'>",
      "answer": 3
    },
    {
      "question": " How do you write 'Hello World' in an alert box?",
      "choice1": "msgBox('Hello World');",
      "choice2": "alertBox('Hello World');",
      "choice3": "msg('Hello World');",
      "choice4": "alert('Hello World');",
      "answer": 4
    },
    {
        "question": " Hyper Text Markup Language Stand For?",
        "choice1": "JavaScript",
        "choice2": "XHTML",
        "choice3": "CSS",
        "choice4": "HTML",
        "answer": 4
      },
      {
        "question": " Which language is used for styling web pages?",
        "choice1": "HTML",
        "choice2": "JQuery",
        "choice3": "CSS",
        "choice4": "XML",
        "answer": 3
      },
      {
        "question": " Which is not a JavaScript Framework?",
        "choice1": "Python Script",
        "choice2": "JQuery",
        "choice3": "Django",
        "choice4": "NodeJS",
        "answer": 3
      },
      {
        "question": " Which is not a JavaScript Data Types?",
        "choice1": "Null",
        "choice2": "Number",
        "choice3": "String",
        "choice4": "Boolean",
        "answer": 1
      },
  ]

//Setting the time limit for taking the quiz
function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerText.innerText = "Time left: " + secondsLeft ;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          localStorage.setItem("latestScore",score);
          //go to the end page
          return window.location.assign('/end.html');
        }
      }, 1000);
    }
function startQuiz(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    setTime();
    getNewQuestion();

}; 

function getNewQuestion(){
    if(availableQuestions.length == 0 || questionCounter>= MAX_QUESTIONS){
        localStorage.setItem("latestScore",score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionCounterText.innerText = "Question " + questionCounter + " of " + MAX_QUESTIONS;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function(choice){
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex,1);

    acceptingAnswers = true;
    result.innerText = "Result of the answer:";
};

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        if(selectedAnswer == currentQuestion.answer){
            result.innerText = "Result of the answer: CORRECT!"
            incrementScore(CORRECT_BONUS);
        } else{
            result.innerText = "Result of the answer: WRONG!"
            secondsLeft -= 5;
        }

        setTimeout(function(){getNewQuestion()},1000);
        
    });
});

function incrementScore(num){
    score +=num;
    scoreText.innerText = "Score: " + score;
}

startQuiz();