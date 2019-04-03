var wins = 0;
var losses = 0;
var currentScore = 0;
var scoreTarget, crystal1, crystal2, crystal3, crystal4;
var crystal1Btn = document.getElementById("crystal-1");
var crystal2Btn = document.getElementById("crystal-2");
var crystal3Btn = document.getElementById("crystal-3");
var crystal4Btn = document.getElementById("crystal-4");
resetGame();
display();


crystal1Btn.addEventListener("click", function () {
    currentScore += crystal1;
    if(currentScore > scoreTarget){
        loss();
    }
    else if(currentScore === scoreTarget){
        win();
    }
    display();
});

crystal2Btn.addEventListener("click", function () {
    currentScore += crystal2;
    if(currentScore > scoreTarget){
        loss();
    }
    else if(currentScore === scoreTarget){
        win();
    }
    display();
});

crystal3Btn.addEventListener("click", function () {
    currentScore += crystal3;
    if(currentScore > scoreTarget){
        loss();
    }
    else if(currentScore === scoreTarget){
        win();
    }
    display();
});

crystal4Btn.addEventListener("click", function () {
    currentScore += crystal4;
    if(currentScore > scoreTarget){
        loss();
    }
    else if(currentScore === scoreTarget){
        win();
    }
    display();
});


function display() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("loses").textContent = losses;
    document.getElementById("currentScore").textContent = currentScore;
    document.getElementById("scoreTarget").textContent = scoreTarget;
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

}

function randomizer() {
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
}

function resetGame() {
    currentScore = 0;
    scoreTarget = Math.floor((Math.random() * 101) + 19);
    randomizer();
}

function win() {
    wins++;
    resetGame();
}

function loss() {
    losses++;
    resetGame();
}