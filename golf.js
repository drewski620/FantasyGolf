var totalScore = 0;
var darkHorse = totalScore + 10;

function addScore() {
   
    var darkHorse = confirm("Is this a dark horse?");
    if (darkHorse) {
        totalScore = totalScore + 10
        console.log(darkHorse)
    } 
    var position = parseInt(
        prompt("What place is your player in?")
    )
    if (position <= 30 && position > 20) {
                return totalScore + 10 + 10
            } else if (position <= 20 && position > 10) {
                return totalScore + 10 + 20
            } else if (position <= 10 && position > 5) {
                return totalScore + 10 + 30
            } else if (position <= 5 && position > 1) {
                return totalScore + 10 + 40;
            } else if (position === 1) {
                return totalScore + 10 + 50;
            } else {
                return totalScore;
            }
}
// console.log(addScore())

var generateBtn = document.querySelector("#generate")
function writeScore() {
    var score = addScore();
    var scoreText = document.querySelector('#overallScore')

    scoreText.value = score;
}

generateBtn.addEventLisener('click', writeScore())
// addScore();
// console.log(addScore(1, darkHorse))










// window.onload=function(){
//     document.getElementById('form').addEventListener('submit', function totalPlayerScore(position)  {
//         position.preventDefault()
       
        
       
//         document.getElementById('score').innerHTML = "This player's total score is " + score.innerHTML;
//     });
//   }

//   var position = document.querySelector('[name="length"]').value;
//   function totalPlayerScore(position) {
//     if (position <= 30 && position > 20) {
//         console.log(10 + 10)
//     } else if (position <= 20 && position > 10) {
//         console.log(10 + 20)
//     } else if (position <= 10 && position > 5) {
//         console.log(10 + 30)
//     } else if (position <= 5 && position > 1) {
//         console.log(10 + 40);
//     } else if (position === 1) {
//         console.log(10 + 50);
//     } else {
//         console.log(10)
//     }
// }