var yesEl = document.getElementById("yes");
var noEl = document.getElementById("no");
var scoreEl = document.getElementById("score")
var position = document.getElementById("position");
var totalEl = document.getElementById("total")

var totalScore = 0;


yesEl.addEventListener("click", function (event) {
    event.preventDefault()
    totalScore = 10
    console.log(totalScore)
    var response = "Your player score is at " + totalScore
    scoreEl.textContent = response;
})

noEl.addEventListener("click", function (event) {
    event.preventDefault()
    totalScore = 0;
    var response = "Your player score is at " + totalScore
    scoreEl.textContent = response;
})

totalEl.addEventListener("click", function (event) {
    event.preventDefault();
    
    if (position <= 30 && position > 20) {
        totalScore += 10
        var response = "Your player score is at " + totalScore
        scoreEl.textContent = response;
    } else if (position <= 20 && position > 10) {
        totalScore += 20
        var response = "Your player score is at " + totalScore
        scoreEl.textContent = response;
    } else if (position <= 10 && position > 5) {
        totalScore += 30
        var response = "Your player score is at " + totalScore
        scoreEl.textContent = response;
    } else if (position <= 5 && position > 1) {
        totalScore += 40;
        var response = "Your player score is at " + totalScore
        scoreEl.textContent = response;
    } else if (position === 1) {
        totalScore += 50;
        var response = "Your player score is at " + totalScore
        scoreEl.textContent = response;
    } else {
        totalScore;
    }

    console.log(totalScore)
})
// function addScore(position) {



// }


// position.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (position <= 30 && position > 20) {
//         totalScore += 10 
//     } else if (position <= 20 && position > 10) {
//         totalScore += 20
//     } else if (position <= 10 && position > 5) {
//         totalScore += 30
//     } else if (position <= 5 && position > 1) {
//         totalScore += 40;
//     } else if (position === 1) {
//         totalScore += 50;
//     } else {
//         totalScore;
//     }
//     console.log(totalScore)
//     var response = "Your player score is at " + totalScore
//     scoreEl.textContent = response;
// })

// submitEl.addEventListener("click", function (event) {
//     event.preventDefault();

// })

// var totalScore = 0;
// var darkHorse = totalScore + 10;




// var generateBtn = document.querySelector("#generate")

// function writeScore() {
//     var score = addScore();
//     var scoreText = document.querySelector('#overallScore')

//     scoreText.value = score;
// }

// generateBtn.addEventListener('click', writeScore)
