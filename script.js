var  timer = 60;

var score = 0;
var hitNum = 0;

function gameOver(){
    alert("hey time over")
    window.location.reload()
}

document.querySelector("#pbtm").addEventListener("click", (dets)=>{
    var clickNum = Number(dets.target.textContent);
    
    if(clickNum === hitNum){
        scoreUpdate();
        makeBubble()
        getNewHit()
    }
})

function scoreUpdate(){
    score += 10; 
    document.getElementById('score').textContent = score;
}

function getNewHit(){
     hitNum = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = hitNum;

}

function runTimer(){
    var timerInt = setInterval(() => {
       if(timer > 0){
           timer--;
           document.querySelector("#timeVal").textContent = timer;
       }
       else{
           clearInterval(timerInt)
           gameOver()
       }
        
       //  console.log(timer);
    }, 1000);
}

function makeBubble(){
    var pbtm = document.querySelector("#pbtm")

var clutter = "";

for(let i = 1 ; i <= 65 ; i++){
    var rn = Math.floor(Math.random()*10);

    clutter += `<div class="bubble">${rn}</div>`
}

   pbtm.innerHTML = clutter;
}

runTimer()
makeBubble()
getNewHit()