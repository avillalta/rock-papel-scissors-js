

const scissors = document.getElementById("scissors"),
    spock = document.getElementById("spock"),
    paper = document.getElementById("paper"),
    lizard = document.getElementById("lizard"),
    rock = document.getElementById("rock"),
    replay = document.getElementById("replay");


const options = ['scissors', 'spock', 'paper', 'lizard', 'rock'];

let score = 0;

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
replay.addEventListener('click', () => resetGame());



const selectHand = (hand) => {
    const userHand = hand;
    const oponentHand = getRandomHand();
    const result = getWinner(userHand, oponentHand);

    document.querySelector('#result').innerText = result[0];
    document.querySelector('#user').classList.add(result[1]);
    document.querySelector('#user').innerHTML = `<img src="/src/images/icon-${result[1]}.svg" alt=""></img>`;
    document.querySelector('#oponent').classList.add(result[2]);
    document.querySelector('#oponent').innerHTML = `<img src="/src/images/icon-${result[2]}.svg" alt=""></img>`;


    document.querySelector('.game-container').setAttribute('style', 'display: none')
    document.querySelector('.result-container').setAttribute('style', 'display: flex')

    console.log('Has seleccionado:', userHand,' El oponente ha elegido:', oponentHand);
}

function getRandomHand() {
    return options[Math.floor(Math.random()*options.length)]
}

function getWinner(userHand, oponentHand){
    if ( userHand === oponentHand ){
        return ['DRAW', userHand, oponentHand]
    } else {
        const result = winner[userHand].some( x => oponentHand === x );
        return result ? ['YOU WIN', userHand, oponentHand] : ['YOU LOSE', userHand, oponentHand]
    }
}

function resetGame(){
    document.querySelector('.game-container').setAttribute('style', 'display: block')
    document.querySelector('.result-container').setAttribute('style', 'display: none')
    document.querySelector('#user').setAttribute("class", "btn");
    document.querySelector('#oponent').setAttribute("class", "btn");
}

function setScore(){
    score++;
    document.querySelector('.score').innerText = score;
}



