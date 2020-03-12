var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore")
var latestScore = localStorage.getItem("latestScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = latestScore;

username.addEventListener('keyup',() =>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

function saveHighScore(e){
    e.preventDefault();

    var score = {
        score: latestScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);

    localStorage.setItem("highScores",JSON.stringify(highScores));

    console.log(highScores);
}