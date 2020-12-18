var playerName = document.getElementById("playerName");
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
    var response = playerName.value + " is your Darkhorse and got you " + totalScore + " extra points."
    scoreEl.textContent = response;
})

noBtn.addEventListener("click", function (event) {
    event.preventDefault()
    totalScore = 0;
    var response = playerName.value +  " is not a dark horse no additional points." 
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
    var total = "Your total score with " + playerName.value + " is " + totalScore + " points."
    totalScoreEl.textContent = total

    var list = document.createElement("LI")
    var playerTotal = document.querySelector("#totalScore").lastChild
    var t = document.createTextNode(playerName.value + ": " + totalScore + " points" )
    list.appendChild(t);
    document.getElementById("myList").appendChild(list)
    
}

// function addPlayersScores() {
//     event.preventDefault();
//     for(var i = 0; i < totalScore.length; i++) {
//         totalScore = totalForPlayers
//     } 
// }

function clearScore() {
    event.preventDefault();
    totalScore = 0
    var total = "Fill In The Form Again " 
    totalScoreEl.textContent = total
    var response = ""
    scoreEl.textContent = response
    playerName.value = ""
    positionEl.value = ""
   
}

totalBtn.addEventListener("click", addScore);
clearBtn.addEventListener("click", clearScore);
// totalForPlayers.addEventListener("click", addPlayersScores)
