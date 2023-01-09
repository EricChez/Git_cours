// /// GAME OF LIFE SCRIPT ////
//

const canvas = document.querySelector('canvas');
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const random = document.getElementById("randomize");
const resetBtn = document.getElementById("reset");
const ctx = canvas.getContext("2d");
const speed = document.getElementById("speed");
const density = document.getElementById("density");
var densityValue = density.value;
var time =  1000 / speed.value;
const liveColor = "black";
const dieColor = "cornsilk";
var gridSize = 100;
var canvasSize = 1000;
var cellsize = canvasSize / gridSize;
var gridCell  = [];
var mainLoop = null;

var direction = 0;
var newPosition = [50, 50];
var oldX = 49;
var oldY = 50;
var oldState = 0;

function initGrid(){
    for (let i = 0; i < gridSize; i++) {
        gridCell[i] = [];
        for (let j = 0; j < gridSize; j++) {
            gridCell[i][j] = 0;
        }
    }
}

function randomize(){
        random.addEventListener("click", function (){
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++){
                    gridCell[i][j] = randomBool();
                }
            }
            drawCells();
        })
}

function reset(){
        resetBtn.addEventListener("click", function (){
            initGrid()
            drawCells();
        })
}

function randomBool(){
    let d = densityValue;
    return Math.random() >= d ? 1 : 0;
}

function drawCells(){
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if(gridCell[i][j] === 1 ){
                ctx.fillStyle = liveColor;
            } else if (gridCell[i][j] === 2) {
                ctx.fillStyle = "red";
            } else if (gridCell[i][j] === 3) {
                ctx.fillStyle = "yellow";
            }
            else
            {
                ctx.fillStyle = "green";
            }
            ctx.fillRect(i * cellsize, j * cellsize, cellsize, cellsize);
        }
    }
}

function gameStart(){
    start.addEventListener('click', function (){

        if ( mainLoop !== null){
            return;
        }

        mainLoop = setInterval( function (){
            newPosition = move(newPosition[0], newPosition[1]);
            drawCells();

        }, time);
    })
    console.log(mainLoop)
}

function pauseMainLoop(){
    stop.addEventListener("click", function (){
        clearInterval(mainLoop);
        mainLoop = null;
    })
}

function drawModeClick() {
    if (mainLoop == null){
        canvas.addEventListener('click', function(event) {
                var rect = canvas.getBoundingClientRect();
                var posX = event.clientX - rect.left;
                var posY = event.clientY - rect.top;
                var pX = Math.floor(posX / cellsize);
                var pY = Math.floor(posY / cellsize);
                console.log(gridCell[pX][pY]);
                if (gridCell[pX][pY] == 1){
                    gridCell[pX][pY] = 0;
                }
                else
                {
                    gridCell[pX][pY] = 1;
                }
                drawCells();
        })
    }
}

function setTime(){
    speed.addEventListener("input", function (){
        console.log(speed.value);
        time = 1000 / speed.value;
        clearInterval(mainLoop);
        mainLoop = null;
    })
}

function setDensity(){
    density.addEventListener("input", function (){
        densityValue = density.value;
    })
}

function move(x, y) {
    let newX = x - oldX;
    let newY = y - oldY;
    let newDirection;
    direction = searchDirection(newX, newY);
    if (oldState === 1) {
        newDirection = (direction + 3) % 4;
        gridCell[x][y] = 3;
    } else {
        newDirection = (direction + 1) % 4;
        gridCell[x][y] = 1;
    }
    oldX = x;
    oldY = y;
    let position = getNewPosition(newDirection, x, y);
    oldState = gridCell[position[0]] [position[1]];
    gridCell[position[0]][position[1]] = 2;
    return position;
}

function getNewPosition(newDirection, x, y) {
    switch (newDirection) {
        case 0:
            return [x, y - 1];
        case 1:
            return [x + 1, y];
        case 2:
            return [x, y + 1];
        case 3:
            return [x - 1, y];
        default:
            return [x , y];
    }
}

function searchDirection(x, y) {
    if (x === 0 && y === -1) {
        // console.log('top');
        direction = 0;
    }
    if (x === 1 && y === 0) {
        // console.log('right');
        direction = 1;
    }
    if (x === 0, y === 1) {
        // console.log('bottom');
        direction = 2;
    }
    if (x === -1 && y === 0) {
        // console.log('left');
        direction = 3;
    }
    return direction;
}



//////////////////////////////

initGrid();
setTime();
setDensity();
randomize();
gameStart();
pauseMainLoop();
drawModeClick();
reset();


















































// // Gestion de la taille de la grille
// // Variables global
//
// const gridSize = 100//  par exemple 1000x1000
// const canvas = document.querySelector('canvas');
// const progressBar = document.getElementById("progressBar");
// const ctx = canvas.getContext("2d");
//
// // Barre de chargement
//
// function loadingBar(gridSize, sizebar, value){
//
// }
//
// // Création du prototype de la cellule
//
// function Cell (position, isAlive, neighbours) {
//     this.position = position; // tableau [x, y]
//     this.isAlive = isAlive; // bool
//     this.neighbours = neighbours; // tableau de Cell
// }
//
//
// // Gestion des cycles
//
//     // nombre de cycles par seconde
//
//     // Création de la boucle principale
//
// // Création de la grille
//
//     // Création du tableau qui gère la grille de cellule
//     var gridCell = [];
//
//     // Initialisation ou reset de la grille de la grid
//     function createGridCell() {
//
//         for (let i = 0; i < gridSize  ; i++) {
//             for (let j = 0; j < gridSize  ; j++) {
//                 var cell = new Cell([i, j], false, null);
//                 gridCell.push(cell);
//             }
//         }
//
//         gridCell.forEach(cell => {
//             cell.neighbours = getNeighbours(cell.position);
//         })
//
//     }
//
//     // Création du tableau qui gère la mise à jour de la grille au prochain cycle
//     var updateGrid = [];
//
//     function resetUpdateGrid() {
//
//         for (let i = 0; i < gridSize ** 2 ; i++) {
//             updateGrid[i] = false;
//         }
//     }
//
//     // Recupérer une cellule sur la grille
//
//     function getCell( cell ){
//         return grid[cell];
//     }
//
//     // mise à jour graphique des cellules
//
//     function updateCells() {
//         grid.forEach((cell, index) => {
//             if (cell.isAlive === true ){
//                 /// colorie
//             }
//         })
//     }
//
// // Gestion des cellules
//
//     // récupération des voisines d'une cellules
//
//     function getNeighbours(arrayCellPosition){
//         let x = arrayCellPosition[0];
//         let y = arrayCellPosition[1];
//
//         var nbArray = [];
//
//
//         if ( y !== 0 && y !== gridCell - 1) { // le cas "normal"
//             nbArray.push([0, -1], [0, +1])
//             if (x !== 0){
//                 nbArray.push([-1, 0], [-1, -1], [-1, +1])
//             }
//             if (x !== gridCell - 1){
//                 nbArray.push([+1, 0], [+1, -1], [+1, +1])
//             }
//         }
//
//         if ( y === gridCell - 1 && y !== 0 ){
//             nbArray.push([0, -1])
//             if (x !== 0){
//                 nbArray.push([-1, 0], [-1, -1])
//             }
//             if (x !== gridCell - 1){
//                 nbArray.push([+1, 0], [+1, -1])
//             }
//         }
//
//         if ( y === 0 && y !== gridCell - 1){
//             nbArray.push([0, +1])
//             if (x !== 0){
//                 nbArray.push([+1, 0], [-1, 1])
//             }
//             if (x !== gridCell - 1){
//                 nbArray.push([0, 1], [+1, +1])
//             }
//         }
//
//         console.log(nbArray)
//
//         neighbours = getNeighboursByArray(nbArray, x, y);
//
//         return neighbours;
//     }
//
//         function getNeighboursByArray(array, centerCellPosX, centerCellPosY){
//
//         let nb = [];
//
//             gridCell.forEach(cell => {
//                 array.forEach(otherCellPosition => {
//                     if ( cell.position[0] === otherCellPosition[0] + centerCellPosX && cell.position[1] === otherCellPosition[0] + centerCellPosY){
//                         nb.push(cell)
//                     }
//                 })
//             })
//
//             return nb;
//         }
//
//
//     function asyncInit() {
//         createGridCell();
//         resetUpdateGrid();
//         console.log(gridCell[1250])
//     }
//
//
//         // si cellule blanche, on continue, sinon on vérifie les 8 cellules adjacentes => on compte le nombnre de 1
//         // sur les 8 position possible.
//         // si le nombre des cellules adjacente est entre 2 et 3  elle reste en vie donc => 1
//         // sinon elle meurt => 0;
//
// // Creation et gestion des boutons et input externes
// //////////////////////////////////////////////////////////   ////////////////////////////////////////////////////
//
//
//     asyncInit();
//
//
//
