//DECLARE VARIABLES
let turn;
let grid;
const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
let winner = null;
const playerTurn =  document.getElementById("player-turn")
const restartBtn = document.getElementById("restartBtn")

//FUNCTIONS
//Declare init
function init() {
    turn = "O"
    grid = [null, null, null, null, null, null, null, null, null]
    winner = null;
    displayTurn()
}

// Alternate players
function switchPlayer() {
    if (turn === "O") {
        turn = "X"
    } else {
        turn = "O"
    }
}

// Victory conditions
function victory() {
    winningCombinations.forEach(function(oneCombination){
        let elA = grid[oneCombination[0]];
        let elB = grid[oneCombination[1]];
        let elC = grid[oneCombination[2]];
        console.log(elA, elB, elC, oneCombination)
        if (elA === "O" && elB === "O" && elC === "O") {
            winner = "O";
        }
        if (elA === "X" && elB === "X" && elC === "X") {
            winner = "X";
        } 
    })
}

// Create a function for evt. Include preventDefault()
function playerClick(evt) {
    evt.preventDefault()
    if(evt.target.tagName !== "DIV") {
        return
    }
    let i = parseInt(evt.target.id, 10)
    console.log("there was a click")
    console.log(evt.target.id)
    // Verify this element has not been clicked
    if (grid[i] !== null) {
        return 
    } else {
    // Update grid array with player turn
        grid[i] = turn
    }
    if (winner === "O" || winner === "X") {
        return
    }
    switchPlayer()
    victory()
    renderGrid()
    displayTurn()
    tie()
    playerDisplayWinner()
}

init()

//EVENTS
// Declare handleClick
document.getElementById("grid").addEventListener("click", playerClick);
restartBtn.addEventListener("click", restartGame);

// create render()
function renderGrid() {
    grid.forEach(function(gridValue, gridIdx){
        const foundEl = document.getElementById(gridIdx)
        if(gridValue !== null) {
            foundEl.innerText = gridValue;
        } else {
            foundEl.innerText = "";
        }
    })
}

function playerDisplayWinner() {
    if (winner !== null) {
        playerTurn.innerText = winner + " is the winner!";
    }
}

function displayTurn() {
    playerTurn.innerText = "It's " + turn + " turn";
}

function tie() {
    let itsNull = false
    grid.forEach(function(element){
        if (element === null) {
            itsNull = true
        }
    })
    if (itsNull === false) {
    playerTurn.innerText = "It's a tie"
    }
}

function restartGame() {
    init()
    renderGrid()
}