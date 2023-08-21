function makeBubble(){
clutter=" ";
for(var i = 1; i <= 161; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>` ;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
var score = 0;
var nh = 0;
function runTimer() {
    var timerint = setInterval(function () {
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    } else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1><pre>GAME OVER 
You Scored = ${score}</pre></h1>`;
    }
    }, 1000);
}

function getNewHit(){
    nh = Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent = nh;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score ;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === nh){
        increaseScore();
        makeBubble
        getNewHit();
    }
});






runTimer();
makeBubble();
getNewHit();

