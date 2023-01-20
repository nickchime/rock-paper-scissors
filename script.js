
function game(){
    let draw = 0;
    let win = 0;
    let loss = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound(playerSelection(window.prompt()),getComputerChoice());
        if( result == 'You Win!'){
            win = win+1;
        }
        else if(result== 'Looser!'){
            loss = loss+1;
        }
        else {
            draw = draw + 1;
        }

    }
    if(win > loss){
        return "You are the winner of the game!";
    }
    else if (loss > win){
        return "You are the looser of the game!"
    }
    else{
        return "The games is a tie"
    }

}

function playRound(human, ai){
    if(human == ai){
        console.log(human);
        console.log(ai);
        console.log('You tied this round');
        return 'Draw';
    }
    else if ( (human == 'rock' && ai == 'scissors') || (human == 'scissors' && ai == 'paper') || (human == 'paper' && ai == 'rock') ){
        console.log(human);
        console.log(ai);
        console.log('You won this round!');
        return 'You Win!';
    }
    else {
        console.log(human);
        console.log(ai);
        console.log('You loss this round');
        return 'Looser!';
    }

}
function getComputerChoice () {
    let randomNumber = Math.floor((Math.random()*3)+1)
    if(randomNumber == 1){
        computerChoice = 'rock';
        return computerChoice;
    }
    else if(randomNumber == 2){
        computerChoice = 'paper';
        return computerChoice;
    }
    else {
        computerChoice = 'scissors';
        return computerChoice;
    }
}

function playerSelection(x){
    let playerInput = x.toLowerCase();
    if(playerInput != 'rock' ||playerInput != 'paper' || playerInput != 'scissors'){
        return playerInput;
    }
    else {
        return console.log('user input is invalid');
    }


}


console.log(game())