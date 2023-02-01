// TRACCIA:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// SVOLGIMENTO:

/********************************
 *                              *
 *           ON LOAD            *
 *                              *
 *******************************/
const playGame = document.getElementById("play_game");

/********************************
 *                              *
 *           ON CLICK           *
 *                              *
 *******************************/
playGame.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        let dimensionGridEl = 100;
        generateGrid(gridEl, dimensionGridEl);
    }
);




/********************************
 *                              *
 *           FUNCTIONS          *
 *                              *
 *******************************/

/**
 * funzione che genera una griglia di quadrati dato l'elemento griglia e il numero di quadrati
 * 
 * @param {*} grid l'elemento griglia
 * @param {int} dimensionGrid il numero di quadrati totali della griglia
 */

function generateGrid(grid, dimensionGrid) {
    // Resettare grid in condizione di start
    grid.innerHTML = "";
    // Creo il ciclo che andrà a generare n div con classe square
    for (let i = 0; i < dimensionGrid; i++) {
        const numberSquare = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.innerHTML = numberSquare;
        // Aggiungo evento al click del quadrato
        squareEl.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
                console.log(numberSquare);
            }
        );

        // Aggiungo elemento square all'elemento grid
        grid.append(squareEl);
    }

}