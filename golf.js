var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");
var positionEl = document.getElementById("position");
var totalBtn = document.getElementById("total")
var scoreEl = document.getElementById("score")
var totalScoreEl = document.getElementById("totalScore")
var clearBtn = document.getElementById("clear")

var totalScore = 0;


yesBtn.addEventListener("click", function (event) {
    event.preventDefault()
    totalScore = 10
    console.log(totalScore)
    var response = "Your player's darkhorse points is at " + totalScore
    scoreEl.textContent = response;
})

noBtn.addEventListener("click", function (event) {
    event.preventDefault()
    totalScore = 0;
    var response = "This player is not a dark horse " + totalScore
    scoreEl.textContent = response;
})

function addScore() {
    event.preventDefault();
    if (positionEl.value <= 30 && positionEl.value > 20) {
        totalScore += 10;
    } else if (positionEl.value <= 20 && positionEl.value > 10) {
        totalScore += 20;
    } else if (positionEl.value <= 10 && positionEl.value > 5) {
        totalScore += 30;
    } else if (positionEl.value <= 5 && positionEl.value > 1) {
        totalScore += 40;
    } else if (positionEl.value == 1) {
        totalScore += 50;
    } else {
        totalScore += 0
    }
    var total = "Your total score with this player is " + totalScore
    totalScoreEl.textContent = total
}

function clearScore() {
    event.preventDefault();
    var total = "You clear the score " + totalScore * 0;
    totalScoreEl.textContent = total
}

totalBtn.addEventListener("click", addScore);
clearBtn.addEventListener("click", clearScore);
