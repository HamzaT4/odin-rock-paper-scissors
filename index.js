let userChoice = prompt("Rock,Paper,Scissors Shot!(R,P,S)");


let cpuChoice = Math.floor(Math.random()*3)+1;

switch (cpuChoice) {
    case 1:
        alert("The Computer played Rock!")
        if(userChoice=='R')  alert("Draw!"); 
        else if(userChoice=='P')  alert("You win!");
        else if (userChoice=='S')  alert("You lose!");
        
        break;

   case 2:
        alert("The Computer played Paper!")
        if(userChoice=='R')  alert("You lose!"); 
        else if(userChoice=='P')  alert("Draw!");
        else if (userChoice=='S')  alert("You win!");
        
        break;
    case 3:
        alert("The Computer played Scissor!")
        if(userChoice=='R')  alert("You win!"); 
        else if(userChoice=='P')  alert("You lose!");
        else if (userChoice=='S')  alert("Draw!");
        
        break;
        default:alert("ERROR!")
}
