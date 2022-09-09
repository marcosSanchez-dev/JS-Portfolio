/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

initGame();


    // cuando presione el boton ROLL, quiero que occura algo: 
document.querySelector(".btn-roll").addEventListener("click",function() {
    if(gamePlaying){
        var dice, diceDOM;
        dice = Math.floor(Math.random() * 6) + 1;

        //muestra el cubo correcto segun el numero aleatorio
        diceDOM = document.querySelector(".dice");
        diceDOM.style.display="block";
        diceDOM.src = "dice-" + dice + ".png";
        
        //si sale uno, le toca al otro jugador y se le borra el avance que llevabas
        if(dice !== 1){
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }else{
            //cambio de jugador
            changePlayer();
        }
    }
});





    // Cuando presiono el boton HOLD que sume el marcador y me diga quien agno

document.querySelector(".btn-hold").addEventListener("click", function () {

    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        //Que pasa cuando alguien gana!
        if(scores[activePlayer] >= 100){
            document.getElementById("name-" + activePlayer).textContent = "WINNER";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        }else{
            changePlayer();
        }
    }
        
})


// El boton NEW GAME va a inicializar todo el juego

document.querySelector(".btn-new").addEventListener("click", initGame);

function initGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";
}

// funcion para cambiar de jugador

function changePlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById("current-1").textContent = roundScore;
        document.getElementById("current-0").textContent = roundScore;

        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle('active');

        document.querySelector(".dice").style.display = "none";
}

/* 
------------- Guardar en una variable el contenido HTML --------------
var x = document.getElementById("current-1").textContent;
console.log(x);

------------- Modificar el HTML --------------
document.querySelector("#current-" + activePlayer).innerHTML = "<b>" + dice + "</b>";
*/