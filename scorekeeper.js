var p1button = document.getElementById("player1");
var p2button = document.getElementById ("player2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var num = document.querySelector("input");
var reset = document.getElementById("reset");
var scorechange = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

p1button.addEventListener("click",function(){
    if (!gameover){
        p1score++;
        if(p1score === winningscore){
            gameover = true;
            p1display.classList.add("winner");
        }
        
        p1display.textContent = p1score;
    };
});

p2button.addEventListener("click",function(){
    if (!gameover){
        p2score++;
        if(p2score === winningscore){
            p2display.classList.add("winner");
            gameover = true;
        }
        p2display.textContent = p2score;
    };
});

reset.addEventListener("click",function(){
    restart();
})
function restart(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display. textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}

num.addEventListener("change",function(){
    scorechange.textContent = num.value;
    winningscore = Number(num.value);
    restart();
})