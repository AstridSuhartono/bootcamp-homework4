//get the html element that is going to be manipulated
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var result = document.getElementById("result");
var questionCounterText = document.getElementById("progress");
var scoreText = document.getElementById("score");

//initialise variables
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Constant variables
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

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
    }
  ]



function startQuiz(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
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
        }

        setTimeout(function(){getNewQuestion()},1500);
        
    });
});

function incrementScore(num){
    score +=num;
    scoreText.innerText = "Score: " + score;
}

startQuiz();