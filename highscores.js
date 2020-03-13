//initialise variables
var highScoresList = document.getElementById("highScoresList");

//get highscores data from local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//display the username with their highscores in a list
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score list-group-item list-group-item-success">
    ${score.name} - ${score.score}</li>`;
  })
  .join("");

//clear the highscore data in local storage
function deleteScores(e){
  e.preventDefault();
  localStorage.clear();
  highScoresList.innerText = "";
}