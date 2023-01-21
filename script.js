function playRound(human, ai){
    human = human.toLowerCase()
    const container = document.querySelector('#results');
    if(human == ai){
        return 'draw';
    }
    else if ( (human == 'rock' && ai == 'scissors') || (human == 'scissors' && ai == 'paper') || (human == 'paper' && ai == 'rock') ){
        return 'win';
    }
    else {
        return 'loss';
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

let w = 0;
let l = 0;
let d = 0;

//trigger the game on a click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id,getComputerChoice());
        if(document.querySelectorAll('p') == true){
            lossContainer.removeChild(win);
            lossContainer.removeChild(loss);
            lossContainer.removeChild(draw);
        }
        if(result === 'win'){
            w++;
            if(w==5){
                const draw = document.createElement('p');
                draw.textContent = `You are a winner with ${w} wins, ${l} loses and ${d} draws`;
                container.appendChild(draw);
            }
            else {
            const winContainer = document.querySelector('#Win');
            const win = document.createElement('p');
            win.textContent = `${w}`;
            winContainer.appendChild(win);
            return w;
            }
        }
        else if(result === "loss"){
            l++;
            if(l==5){
                const draw = document.createElement('p');
                draw.textContent = `You are a LOSER with ${l} loses, ${w} wins and ${d} draws`;
                container.appendChild(draw);
            }
            else {
            const lossContainer = document.querySelector('#Loss');
            const loss = document.createElement('p');
            loss.textContent = `${l}`;
            lossContainer.appendChild(loss);
            return l;
            }
        }
        else{
            d++;
            const drawContainer = document.querySelector('#Tie');
            const draw = document.createElement('p');
            draw.textContent = `${d}`;
            drawContainer.appendChild(draw);
            return d;
        }
        
    })
})

