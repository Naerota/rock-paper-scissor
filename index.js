const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const winner = document.querySelector('.winner')
const parafLog = document.querySelector('.parafLog')
const pp = document.querySelector('.player-point')
const cp = document.querySelector('.computer-point')
const totalRound = document.querySelector('.total-round')
const prw = document.querySelector('.playerRoundWin')
const crw = document.querySelector('.computerRoundWin')


let playerSelection;
let computerSelection;
let round = 1;
let playerPoint = 0;
let computerPoint = 0;
let gameStart;
let roundWinner;
let winnerText;
let index = 1;
let historyName = `.round${index}`
let historyParaf = document.querySelector(historyName)
let prwScore = 0;
let crwScore = 0;

button1.addEventListener('click', () => {
    playerSelection = button1.value
    computerPlay()
    playRound(playerSelection,computerSelection)
    gameOver()
})
button2.addEventListener('click', () => {
    playerSelection = button2.value
    computerPlay()
    playRound(playerSelection,computerSelection)
    gameOver()
})
button3.addEventListener('click', () => {
    playerSelection = button3.value
    computerPlay()
    playRound(playerSelection,computerSelection)
    gameOver()
})



function gameOver(){
    if(playerPoint == 5 || computerPoint == 5){
        parafLog.textContent = 'Lose or Win is doesn\'t matter.'
        if(playerPoint > computerPoint){
            prwScore += 1
            prw.textContent = prwScore
            roundWinner = true
            winner.textContent = `YOU WIN ROUND ${round}, HUMAN. GO PLAY AGAIN!`
        } else {
            crwScore += 1
            crw.textContent = crwScore
            roundWinner = false
            winner.textContent = `YOU LOSE ROUND ${round}, HUMAN. GO PLAY AGAIN!`
        }
        history()
        round += 1;
        totalRound.textContent = round;
        playerPoint = 0;
        computerPoint = 0;
        pp.textContent = playerPoint
        cp.textContent = computerPoint
    }
}

let array = ['rock', 'paper', 'scissors'];

function computerPlay(){
    // random number for array index
    let randomIndex = Math.floor(Math.random()*Number(array.length));
    computerSelection = array[randomIndex];
}

function playRound(ps, cs){
    // ps = playerSelection and cs = computerSelection
    if(ps == cs)
    {
        winner.textContent = 'It\'s Tie';
        parafLog.textContent = 'You choose a same symbol'
    } else if 
    ( (ps == 'paper' && cs == 'rock') ||
      (ps == 'rock' && cs == 'scissors')||
      (ps == 'scissors' && cs == 'paper') )
    {
        playerPoint += 1
        pp.textContent = playerPoint
        winner.textContent = 'Player Win'
        parafLog.textContent = `You choose ${playerSelection}, It\' beaten by ${computerSelection}`
    } else if
    ((cs == 'paper' && ps == 'rock') ||
      (cs == 'rock' && ps == 'scissors')||
      (cs == 'scissors' && ps == 'paper') )
    {
        computerPoint += 1
        cp.textContent = computerPoint
        winner.textContent = 'Computer Win'
        parafLog.textContent = `You choose ${playerSelection}, It\' beaten by ${computerSelection}`
    }
}

function changeIndex(){
    historyName = `.round${index}`
    historyParaf = document.querySelector(historyName)
}

function history(){
    // import text to history log
    if(roundWinner){
        winnerText = 'PLAYER WIN'
    } else {
        winnerText = 'COMPUTER WIN'
    }
    historyParaf.textContent = `ROUND ${round} ${winnerText}`
    index += 1
    changeIndex()

    if(index == 13){
        index = 1;
        changeIndex()
    }
}

// before play

const clickPlay = document.querySelector('.before-play')
clickPlay.addEventListener('click',removeBackground)
function removeBackground(){
    clickPlay.classList.add('after-click')
}

