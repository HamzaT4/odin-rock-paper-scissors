let  champions = document.querySelectorAll('.imgs img');
let cpuScore= document.querySelector('.cpu-score');
let userScore=document.querySelector('.user-score');
let cpuChoice = Math.floor(Math.random()*3)+1;
let result = document.querySelector('.container');
champions.forEach(champion => champion.addEventListener("click",
playRound ));

function playRound(pickedChamp) {
    let userChoice = pickedChamp.target.alt;
    let cpuChoice = Math.floor(Math.random()*3)+1;
    switch (cpuChoice) {
        case 1:
          
            if(userChoice=='rock')  alert("The Bot Picked Malphit Too Draw!"); 
            else if(userChoice=='paper'){
                alert("The Bot Picked Malphit You win!");
                userScore.textContent++;

            }
            else if (userChoice=='scissor'){
                alert("The Bot Picked Malphit You lose!");
                cpuScore.textContent++;  
            }  
            
            break;
    
       case 2:
            
            if(userChoice=='rock') {
                alert("The Bot Picked Twisted Fate You lose!");
                cpuScore.textContent++;   
            } 
            else if(userChoice=='paper')  alert("The Bot Picked Twisted Fate Draw!");
            else if (userChoice=='scissor') {
                alert("The Bot Picked Twisted Fate You win!");
                userScore.textContent++;
            } 
            
            break;
        case 3:
           
            if(userChoice=='rock'){
                alert("The Bot Picked Gwen You Win!");
                userScore.textContent++;
            }   
            else if(userChoice=='paper') {
                alert("The Bot Picked Gwen You lose!");
                cpuScore.textContent++;
            } 

            else if (userChoice=='scissor')  alert("The Bot Picked Gwen Draw!");
            
            break;
            default:alert("ERROR!")
    }
    
if (cpuScore.textContent==3) defeat();
    

if(userScore.textContent == 3) victory();
}


function defeat(){
   
    result.innerHTML =
     '<img style = "width : 500px;" src="./images/lose.png" alt="">  <h2>Click here to start a new game </h2> ';
    document.querySelector("h2").addEventListener("click", ()=> location.reload());
}

function victory(){
    result.innerHTML = 
    '<img style = "width : 500px;" src="./images/win.png" alt="">  <h2>Click here to start a new game </h2> ';
    document.querySelector("h2").addEventListener("click", ()=> location.reload());
}

