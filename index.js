var randomnumber1;
var randomnumber2;
var randomnumber3;
var randomnumber4;
var computerRandom;
var userScore=0;
var computerScore=0;
var gamerunning=false;
var initiative=false;
var playbtnactive=true;
var userCards=[];
var computerCards=[];


setremover();
$(".playbtn").click(function () {
    if (playbtnactive==true) {
        gamerunning=true;
        $(".message").text("Press the Card to Take Another One");
        $(".setup").slideDown();
        initiate();
        playbtnactive=false;
        setInterval(function () {
            computerTurn();
        },500);
        $(".playbtn").slideUp();
    }
});
$(".cardimg").click(function () {
    ongoingGame();
    checkanswer();
    if (gamerunning==false) {
        $(".showbtn").slideUp();    
    }
});

$(".showbtn").click(function () {
    $(".showbtn").slideUp();
    gamerunning=false;
    checkanswer();
});

function initiate() {
    randomnumber1=Math.floor((Math.random()*10)+1);
    randomnumber2=Math.floor((Math.random()*10)+1);
    randomnumber3=Math.floor((Math.random()*10)+1);
    randomnumber4=Math.floor((Math.random()*10)+1);
    userScore=randomnumber1 + randomnumber3;
    computerScore=randomnumber2 + randomnumber4;

    userCards.push(randomnumber1);
    userCards.push(randomnumber3);
    computerCards.push(randomnumber2);
    computerCards.push(randomnumber4);

    $(".userscore").text("Your Current Score "+userScore);
    $(".opponentscore").text("Opponent's First Card "+randomnumber2);
    $(".usercards").text("Your Cards ["+userCards+"]");

}

function setremover() {
    $(".setup").hide();
    $(".opponentcards").hide();
}

function ongoingGame() {
    if (gamerunning==true) {
        randomnumber1=Math.floor((Math.random()*10)+1);
        userCards.push(randomnumber1);
        userScore+=randomnumber1;
        $(".userscore").text("Your Current Score "+userScore);
        $(".usercards").text("Your Cards ["+userCards+"]");
    }
}
function computerTurn() {
    computerRandom=Math.floor(Math.random()*2);
    if (gamerunning==true) {
        if (computerRandom==1) {
            if (computerScore<18) {
                randomnumber2=Math.floor((Math.random()*10)+1);
                computerScore+=randomnumber2;
                computerCards.push(randomnumber2);
            }   
        }
    }
}

function checkanswer() {
    if (userScore>21) {
        $(".message").text("You Lose!! You Went Over");
        $(".userscore").text("Your Final Score "+userScore);
        $(".opponentscore").text("Opponent Final Score "+computerScore);
        $(".userscore").addClass("gameover");
        $(".usercards").text("Your Final Hand ["+userCards+"]");
        $(".opponentcards").slideDown();
        $(".opponentcards").text("Opponent's Final Hand ["+computerCards+"]");
        gamerunning=false;
    }
    else if (userScore>computerScore && userScore<=21 && gamerunning==false) {
        $(".message").text("You Win!");
        $(".userscore").text("Your Final Score "+userScore);
        $(".opponentscore").text("Opponent Final Score "+computerScore);
        $(".opponentscore").addClass("gameover");
        $(".usercards").text("Your Final Hand ["+userCards+"]");
        $(".opponentcards").slideDown();
        $(".opponentcards").text("Opponent's Final Hand ["+computerCards+"]");
    }
    else if (userScore<computerScore && computerScore<=21 && gamerunning==false) {
        $(".message").text("You Lose!!");
        $(".userscore").text("Your Final Score "+userScore);
        $(".opponentscore").text("Opponent Final Score "+computerScore);
        $(".userscore").addClass("gameover");
        $(".usercards").text("Your Final Hand ["+userCards+"]");
        $(".opponentcards").slideDown();
        $(".opponentcards").text("Opponent's Final Hand ["+computerCards+"]");
    }
    else if (userScore==computerScore && gamerunning==false) {
        $(".message").text("Game Draw.");
        $(".userscore").text("Your Final Score "+userScore);
        $(".opponentscore").text("Opponent Final Score "+computerScore);
        $(".score").addClass("whitetext");
        $(".usercards").text("Your Final Hand ["+userCards+"]");
        $(".opponentcards").slideDown();
        $(".opponentcards").text("Opponent's Final Hand ["+computerCards+"]");
    }
    else if (computerScore>userScore && computerScore>21 && gamerunning==false) {
        $(".message").text("You Win! Opponent Went Over");
        $(".userscore").text("Your Final Score "+userScore);
        $(".opponentscore").text("Opponent Final Score "+computerScore);
        $(".opponentscore").addClass("gameover");
        $(".usercards").text("Your Final Hand ["+userCards+"]");
        $(".opponentcards").slideDown();
        $(".opponentcards").text("Opponent's Final Hand ["+computerCards+"]");
    }
}