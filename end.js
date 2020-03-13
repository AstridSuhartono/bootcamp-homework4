//initialise variables
var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore")
var latestScore = localStorage.getItem("latestScore");

//getting highscores data from local storage if available
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//show the current score that the user get
finalScore.innerText = latestScore;

//block user to save score without any username
username.addEventListener('keyup',() =>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

//called when user click the save button and save user score into a sorted highscores array in local storage
function saveHighScore(e){
    e.preventDefault();

    var score = {
        score: latestScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.href = "/highscores.html";
}