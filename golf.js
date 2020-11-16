function totalScore(position, type) {
   
    if (position <= 30 && position > 20) {
        console.log(10 + 10)
    } else if (position <= 20 && position > 10) {
        console.log(10 + 20)
    } else if (position <= 10 && position > 5) {
        console.log(10 + 30)
    } else if (position <= 5 && position > 1) {
        console.log(10 + 40);
    } else if (position === 1) {
        console.log(10 + 50);
    } else {
        console.log(10)
    }
}


totalScore(5)
