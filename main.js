//DECLARE VARIABLES
let turn
let grid
const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

//FUNCTIONS
//Declare init
function init() {
    turn = "O"
    grid = [null, null, null, null, null, null, null, null, null]
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
        if (elA === "O" && elB === "O" && elC === "O") {
            return "O";
        }
        if (elA === "X" && elB === "X" && elC === "X") {
            return "X";
        } 
    })
    return null
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
    console.log(grid)
    switchPlayer()
    let winner = victory()
}

init()

//EVENTS
// Declare handleClick
document.getElementById("grid").addEventListener("click", playerClick);

