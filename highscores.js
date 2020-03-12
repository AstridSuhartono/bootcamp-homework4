var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score list-group-item list-group-item-success">
    ${score.name} - ${score.score}</li>`;
  })
  .join("");

  function deleteScores(e){
    e.preventDefault();
    localStorage.clear();
    highScoresList.innerText = "";
}