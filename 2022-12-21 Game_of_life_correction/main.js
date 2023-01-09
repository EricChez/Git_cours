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
const nbArray = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
const liveColor = "black";
const dieColor = "white"
var gridSize = 50;
var canvasSize = 1000;
var cellsize = canvasSize / gridSize;
var gridCell  = [];
var gridUpdate = [];
var mainLoop = null;
var isMouseDown = false;
const positionInfo = document.getElementById("postion");



function initGrid(){
    for (let i = 0; i < gridSize; i++) {
        gridCell[i] = [];
        gridUpdate[i] = [];
        for (let j = 0; j < gridSize; j++) {
            gridCell[i][j] = 0;
            gridUpdate[i][j] = 0;
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
            }
            else
            {
                ctx.fillStyle = dieColor;
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
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    let state = gridCell[i][j]
                    let beforeState = state === 1 ? "vivante" : "morte";
                    let neighboursState = numberNeighbours(i,j);
                    let isALive = checkisAlive(neighboursState, state);
                    let afterState = isALive === 1 ? "vivante" : "morte";

                    if (isALive !== state){
                        console.log(`[${i}, ${j}] est ${beforeState}, elle a ${neighboursState} voisine(s) et elle devient ${afterState}`);
                    }
                    gridUpdate[i][j] = isALive;
                }
            }

            exchangeGrid();
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


function numberNeighbours(row, col) {

   // const nbArray = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    let count = 0

    nbArray.forEach(nb => {

        count += getNeighBours(row + nb[0], col + nb[1]);
    })

    return count;
}


function getNeighBours(row, col){

    try {
        return gridCell[row][col]
    }
    catch {
        return 0;
    }

}

function checkisAlive(neighBourNbr, state){

    if ( state === 0 && neighBourNbr === 3 ){ // une cellule nait
        return 1;
    }

    if (state === 1 && neighBourNbr > 1 && neighBourNbr < 4){
        // une cellule deja vivante reste en vie ...
        return 1;
    }else
    {
        return 0;
    }

}

function drawModeClick() {
    let cellPosition;

    if (mainLoop == null){
        canvas.addEventListener('click', function(event) {
                var rect = canvas.getBoundingClientRect();
                var posX = event.clientX - rect.left;
                var posY = event.clientY - rect.top;
                var pX = Math.floor(posX / cellsize);
                var pY = Math.floor(posY / cellsize);
                console.log(gridCell[pX][pY]);
                if (gridCell[pX][pY] == 1){
                    gridCell[pX][pY] = 0
                }
                else
                {
                    gridCell[pX][pY] = 1;
                }
                drawCells();
        })

    }

}


function debug(){

    if (mainLoop == null){

        canvas.addEventListener('mousemove', function(event) {
            var rect = canvas.getBoundingClientRect();
            var posX = event.clientX - rect.left;
            var posY = event.clientY - rect.top;
            var pX = Math.floor(posX / cellsize);
            var pY = Math.floor(posY / cellsize);
            // positionInfo.innerHTML = pX + ' ' + pY;

        })

    }
}


function mouseListener(){

    canvas.addEventListener('mousedown', function() {
        isMouseDown = true;
    })

    canvas.addEventListener('mouseup', function() {
        isMouseDown = false;
    })

    canvas.addEventListener('mouseout', function() {
        isMouseDown = false;
    })
}

function exchangeGrid(){
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            gridCell[i][j] = gridUpdate[i][j];
        }
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


//////////////////////////////

initGrid();
setTime();
setDensity();
randomize();
mouseListener();
gameStart();
pauseMainLoop();
drawModeClick();
reset();
debug()


















































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
