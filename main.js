//DECLARE VARIABLES
let turn
let grid

//FUNCTIONS
//Declare init
function init() {
    turn = "O"
    grid = [null, null, null, null, null, null, null, null, null]
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
// Update grid array with player turn
    grid[i] = turn
    console.log(grid)
}

init()
//EVENTS
// Declare handleClick
document.getElementById("grid").addEventListener("click", playerClick);

