let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//ctx.moveTo(0, 0);
//ctx.lineTo(1000, 1000);
//ctx.stroke();

/*

for (let i = 0; i<1000; i+=50) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 1000);
    ctx.strokeStyle = "rgb(38, 87, 89)";
    ctx.stroke();

    ctx.moveTo(0, i);
    ctx.lineTo(1000, i);
    ctx.strokeStyle = "rgb(38, 87, 89)";
    ctx.stroke();

    let x = canvas.width / 2;
    let y = canvas.width / 2;

    ctx.beginPath();
    ctx.arc(x, y, i, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgb(38, 87, 89)";
    ctx.stroke();
}

let x = canvas.width / 2;
let y = canvas.width / 2;

for (let r = 0; r <= x; r+=50) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgb(38, 87, 89)";
    ctx.stroke();
}

ctx.moveTo(0, 1000);
ctx.lineTo(500, 0);
ctx.strokeStyle = "rgb(38, 87, 89)";
ctx.stroke();

ctx.moveTo(1000, 1000);
ctx.lineTo(500,0);
ctx.strokeStyle = "rgb(38, 87, 89)";
ctx.stroke();
*/


/*  
    PSEUDO CODE

    create grid & update grid
        initialize arrays with two for loops
        we ensure that all cells are dead
    draw cells
        read grid (for calculations) with two for loops
        for each cell, check whether dead or alive
        if alive, draw black rectangle, otherwise draw white rectangle
    create main loop
        wait for start or stop button
        set inverval (counter) inside which all calculations will be done
    read grid for calculations
        for each position, read state of 8 neighbouring cells
        add the states of cells
        the result determines whether the cell in question is alive or dead
    create buttons
        link buttons to event listeners
        start
        stop
        random
    create paint brush
        event listener for the mouse
    create debugging tools
        display grid coordinates of mouse pointer
        display change of state
*/

const x = canvas.width / 2;
const y = canvas.width / 2;
/*
ctx.fillStyle = "cadetblue";
ctx.fillRect(x, y, 10, 10); // this way we get a grid of 100 cells
*/

const gridCells = [];
const gridUpdate = [];
const gridSize = 100;
const cellSize = canvas.width / gridSize;
const nbArray = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
let mainloop = null;
let startBtn = document.getElementById("start");
let randomBtn = document.getElementById("random");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let densityBtn = document.getElementById("densitySlider");
let density = densityBtn.value;
let speedBtn = document.getElementById("speedSlider");
let speed = 1050 - speedBtn.value;
let xCoord = document.getElementById("x-coord");
let yCoord = document.getElementById("y-coord");

// create grid and update grid
function initGrid() {
    for (let i = 0; i < gridSize; i++) {
        gridCells[i] = [];
        gridUpdate[i] = [];
        for (let j = 0; j < gridSize; j++) {
            gridCells[i][j] = 0;
            gridUpdate[i][j] = 0;
        }
    }
}

// draw cells
function drawCells() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (gridCells[i][j] === 0) {
                ctx.fillStyle = "cornsilk";
            } else {
                ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
            ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);
        }
    }
}
// WITHOUT USING THE SLIDER
function randomize() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j ++) {
            gridCells[i][j] = randomDensity();
        }
    }
}
function randomDensity() {
    return Math.random() <= 0.8 ? 1 : 0; // ternary condition
}

// USING THE SLIDER
function setRandomizer(){
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j ++) {
            gridCells[i][j] = setDensity();
        }
    }
} 
function setDensity(){
    density = densityBtn.value;
    return Math.random() <= density ? 1 : 0;
}

// create main loop
function gameStart() {
    if (!mainloop) {
        mainloop = setInterval(function() {
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    let state = gridCells[i][j];
                    let neighboursSum = numberNeighbours(i, j);
                    let isAlive = rules(neighboursSum, state)
                    gridUpdate[i][j] = isAlive;
                }
            }
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    gridCells[i][j] = gridUpdate[i][j];
                }
            }
            drawCells();
        }, 1050 - speedBtn.value)
    }
}

function numberNeighbours(xCell, yCell) {
    let count = 0;
    nbArray.forEach(nb=> {
        count += getNeighbours(xCell + nb[0], yCell + nb[1]);
    })
    return count;
}

function getNeighbours(x, y) {
    try {
        return gridCells[x][y];
    } catch {
        return 0;
    }
}

function rules(nbSum, currentState) {
    if (currentState === 0 && nbSum === 3) {
        return 1;
    } else if (currentState === 1 && (nbSum === 2 || nbSum === 3)) {
        return 1;
    } else {
        return 0;
    }
}

initGrid();
randomBtn.addEventListener('click', () => {
    setRandomizer();
    drawCells();
});

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
canvas.addEventListener('click', (e) => {
    let x = xCoord.value = `${Math.floor(e.offsetX/cellSize)}`;
    let y = yCoord.value = `${Math.floor(e.offsetY/cellSize)}`;
    /* OR (VIVIEN'S CODE)
        var rect = canvas.getBoundingClientRect();
        var posX = e.clientX - rect.left;
        var posY = e.clientY - rect.top;
        var pX = Math.floor(posX / cellSize);
        var pY = Math.floor(posY / cellSize);
    */
    if (gridCells[x][y] === 0) {
        ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.fillRect(x*cellSize, y*cellSize, 10, 10);
        gridCells[x][y] = 1;
    } else {
        ctx.fillStyle = "cornsilk";
        ctx.fillRect(x*cellSize, y*cellSize, 10, 10);
        gridCells[x][y] = 0;
    }
});

function start() {
    if(mainloop == null) {
        gameStart();
    }
}
function stop() {
    clearInterval(mainloop);
    mainloop = null;
    //initGrid();
    //gameStart();
}
function reset() {
    stop();
    initGrid();
    drawCells();
}








//randomize();
/*
gridCells[50][50] = 1;
gridCells[51][50] = 1;
gridCells[49][51] = 1;
gridCells[50][51] = 1;
gridCells[50][52] = 1;
*/
//drawCells();
//gameStart();


/* MON EFFORT QUI MARCHE AUSSI
function randCells() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let ranNum = Math.floor(Math.random()*2);
            if (ranNum == 1) {
                gridCells[i][j] = 1;
            } else {
                gridCells[i][j] = 0;
            }
        }
    }
}
*/

/* MON EFFORT
function readGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let addStates = gridCells[i-1][j-1]
                + gridCells[i-1][j]
                + gridCells[i-1][j+1]
                + gridCells[i][j-1]
                + gridCells[i][j+1]
                + gridCells[i+1][j-1]
                + gridCells[i+1][j]
                + gridCells[i+1][j+1];

                OR
                let count = 0;
                count += gridCells[xCell - 1][yCell - 1];
                count += gridCells[xCell - 1][yCell];
                count += gridCells[xCell - 1][yCell + 1];
                count += gridCells[xCell][yCell - 1];
                count += gridCells[xCell][yCell + 1];
                count += gridCells[xCell + 1][yCell - 1];
                count += gridCells[xCell + 1][yCell];
                count += gridCells[xCell + 1][yCell + 1];
                return count;

            if (gridCells[i][j] === 0 && addStates === 3) {
                gridCells[i][j] = 1;
            } else if (gridCells[i][j] === 1 && addStates < 2) {
                gridCells[i][j] = 0;
            } else if (gridCells[i][j] === 1 && addStates > 3) {
                gridCells[i][j] = 0;
            }
        }
    }
}

    
    count += gridCells[xCell - 1][yCell - 1];
    count += gridCells[xCell - 1][yCell];
    count += gridCells[xCell - 1][yCell + 1];
    count += gridCells[xCell][yCell - 1];
    count += gridCells[xCell][yCell + 1];
    count += gridCells[xCell + 1][yCell - 1];
    count += gridCells[xCell + 1][yCell];
    count += gridCells[xCell + 1][yCell + 1];
    return count;
    
*/