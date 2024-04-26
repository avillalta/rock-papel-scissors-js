

const scissors = document.getElementById("scissors"),
    spock = document.getElementById("spock"),
    paper = document.getElementById("paper"),
    lizard = document.getElementById("lizard"),
    rock = document.getElementById("rock");


const options = ['scissors', 'spock', 'paper', 'lizard', 'rock'];

const winner = {
    'scissors': ['lizard', 'paper'],
    'spock': ['scissors', 'rock'],
    'paper': ['rock', 'spock'],
    'lizard': ['spock', 'paper'],
    'rock': ['scissors', 'lizard'],
}


scissors.addEventListener('click', () => selectHand('scissors'));
spock.addEventListener('click', () => selectHand('spock'));
paper.addEventListener('click', () => selectHand('paper'));
lizard.addEventListener('click', () => selectHand('lizard'));
rock.addEventListener('click', () => selectHand('rock'));


const selectHand = (hand) => {
    const userHand = hand;
    const oponentHand = getRandomHand();

    document.querySelector('#result').innerText = getWinner(userHand, oponentHand);

    document.querySelector('.game-container').setAttribute('style', 'display: none')
    document.querySelector('.result-container').setAttribute('style', 'display: flex')

    console.log('Has seleccionado:', userHand,' El oponente ha elegido:', oponentHand);
}

function getRandomHand() {
    return options[Math.floor(Math.random()*options.length)]
}

function getWinner(userHand, oponentHand){
    if ( userHand === oponentHand ){
        return ['DRAW']
    } else {
        const result = winner[userHand].some( x => oponentHand === x );
        return result ? ['YOU WIN'] : ['YOU LOSE']
    }
}

function resetGame(){
    
}



