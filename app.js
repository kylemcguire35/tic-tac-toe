const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');
const box4 = document.querySelector('#box-4');
const box5 = document.querySelector('#box-5');
const box6 = document.querySelector('#box-6');
const box7 = document.querySelector('#box-7');
const box8 = document.querySelector('#box-8');
const box9 = document.querySelector('#box-9');

const newGameBtn = document.querySelector('.new-game');
const boxes = document.querySelectorAll('.box');
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');

const winnerAlert = document.querySelector('.winner');
const tieAlert = document.querySelector('.tie');

let win = false;
let gamePlaying = true;
let index = 0;


//click box to input letter (X or O)
boxes.forEach(function (box) {
    box.addEventListener('click', function() {
        //allows click if the box is blank and if the game is still going
        if (box.textContent === '' && gamePlaying === true) {

            if (player1.classList.contains('active')) {
                box.textContent = 'X';
                box.classList.add('X');

                winner();
                gameOver();

            } else if (player2.classList.contains('active')) {
                box.textContent = 'O';
                box.classList.add('O');

                winner();
                gameOver();
            }
        }
    });
});

//check for winner
function winner() {

    if ((box1.classList.contains('X') && box2.classList.contains('X') && box3.classList.contains('X')) 
    ||  (box1.classList.contains('O') && box2.classList.contains('O') && box3.classList.contains('O')) 
    ||  (box4.classList.contains('X') && box5.classList.contains('X') && box6.classList.contains('X')) 
    ||  (box4.classList.contains('O') && box5.classList.contains('O') && box6.classList.contains('O'))
    ||  (box7.classList.contains('X') && box8.classList.contains('X') && box9.classList.contains('X')) 
    ||  (box7.classList.contains('O') && box8.classList.contains('O') && box9.classList.contains('O'))
    ||  (box1.classList.contains('X') && box4.classList.contains('X') && box7.classList.contains('X')) 
    ||  (box1.classList.contains('O') && box4.classList.contains('O') && box7.classList.contains('O'))
    ||  (box2.classList.contains('X') && box5.classList.contains('X') && box8.classList.contains('X')) 
    ||  (box2.classList.contains('O') && box5.classList.contains('O') && box8.classList.contains('O'))
    ||  (box3.classList.contains('X') && box6.classList.contains('X') && box9.classList.contains('X')) 
    ||  (box3.classList.contains('O') && box6.classList.contains('O') && box9.classList.contains('O'))
    ||  (box1.classList.contains('X') && box5.classList.contains('X') && box9.classList.contains('X')) 
    ||  (box1.classList.contains('O') && box5.classList.contains('O') && box9.classList.contains('O'))
    ||  (box3.classList.contains('X') && box5.classList.contains('X') && box7.classList.contains('X')) 
    ||  (box3.classList.contains('O') && box5.classList.contains('O') && box7.classList.contains('O'))) {

        win = true;
        winnerAlert.style.display = 'block';

    } else {
        changePlayer();
    }
};


//function to check if gameplay should continue
function gameOver() {
    //count the numer of moves, 9 total for a tie
    index++;    

    //check for winner
    if (win === true) {
        gamePlaying = false;

    //check for tie
    } else if (index === 9) {
        //tie
        gamePlaying = false;
        tieAlert.style.display = 'block';
        changePlayer();
    }
};

//call function to clear board for game start
newGame();

//function to clear game board and select active player
function newGame() {
    //clears all boxes
    boxes.forEach(function(box) {
        box.textContent = '';
        box.classList.remove('X', 'O');

    //clear win or tie alert
    winnerAlert.style.display = 'none';
    tieAlert.style.display = 'none';

    //make Player 1 active
    changePlayer();

    win = false;
    gamePlaying = true;
    index = 0;
    });
};

//click New Game to call new game function
newGameBtn.addEventListener('click', newGame);

//function to switch Active Player
function changePlayer() {
    if (player2.classList.contains('active')) {
        player2.classList.remove('active');
        player1.classList.add('active');

    } else if (player1.classList.contains('active')) {
        player1.classList.remove('active');
        player2.classList.add('active');
    }
};




