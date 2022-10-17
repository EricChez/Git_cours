// ET & OU
let x = 10
let y = 9

// OU (OR)
if (x == 10 || y == 5) {
    console.log(true)
} else {
    console.log(false)
}

// ET (AND)
if (x == 10 && y == 5) {
    console.log(true)
} else {
    console.log(false)
}

// OU exclusif (XOR) = one or the other, but not both
if (x == 10 ^ y == 5) {
    console.log(true)
} else {
    console.log(false)
}

// NAND
if (x!= 10 && y != 5) {
    console.log(true)
} else {
    console.log(false)
}

// Bonnes pratiques
/* à chaque changement de bloc {} 
il est indispensable de faire un TAB (indentation) */
/* si une fonction retourne quelque chose, elle doit commencer
par : 
    - si elle retourne une boolean, par 'is...' ou 'has...'
    - une fonction doit roujours refléter ce qu'elle fait
    - une fonction doit faire une seule chose à la fois
    - le nom de la function est écrit en camel case
*/

// Null & Undefined
let nl = null // variable est définie, mais sans valeur
console.log(nl)

/* utilisé dans les fonctions qui retourne un objet, si la fonction
ne trouve pas d'objet, elle retourne un objet null */
let element = document.getElementById('paul');
console.log(element);

let k;
console.log(k); // la variable est déclarée, mais on ne sait pas ce que c'est

if (k === undefined) {
    k = 12;
}
console.log(k);

if (nl) {
    console.log(true)
} else {
    console.log(false)
}
let button = document.getElementsByClassName('exA') // retourne un tableau
function myClick() {
    console.log("J'ai cliqué sur le bouton")
}
// un écouteur va attendre un évènement de notre part
button[0].addEventListener('click', myClick)
// this method accepts two arguments: event and a function
// [0] pour avoir le premier element du tableau class exA

// ctrl + k + c pour metter une ligne de code en commentaires
/*
button[0].addEventListener('click', function(){
    // console.log("J'ai cliqué sur le bouton")
})
here we use an anonymous function used as an argument
*/


button[0].addEventListener('click', function(event){
    console.log("J'ai cliqué sur le bouton")
    console.log(event)
})
// this way, with 'event' (or 'e') inside the function brackets, we recuperate the event

let inputText = document.getElementById('exB')
inputText.addEventListener('input', function() {
    console.log('ok')
})

// une méthode est une fonction dans un objet
// une fonction est définie hors objet

// L'API XMLHttpRequest est au coeur d'AJAX
/* AJAX (Asynchronous JavaScript + XML) n'est pas une technologie en soi, 
mais un terme désignant une « nouvelle » approche utilisant un ensemble de 
technologies existantes, dont : HTML ou XHTML, CSS, JavaScript, DOM, XML, XSLT, 
et surtout l'objet XMLHttpRequest */


var btnImage = document.getElementById('send')
var image = document.querySelector('img')
// Two ways of doing the event listener, but the seond one will not work, it has been blocked on the server
// the cors have been blocked, they are codes which enable API's not to retrieve crap
// it's a security
// but we shall do our own API later, so we shall not encounther the problem

/btnImage.addEventListener('click', function(){
    // ajax (XMLHttpRequest) est un objet, il faut en instancier un nouveau
    var ajax = new XMLHttpRequest();
    // ensuite if faut le configurer
    ajax.open('GET', 'https://api.thecatapi.com/v1/images/search', true) // true refers to synchrone ou asynchrone
    ajax.responseType = 'json';
    ajax.send();
    // after sending it, we need to reception it
    ajax.onload = function() {
        console.log(this.response[0].url);
        image.src = this.response[0].url;
    }
})
/*
btnImage.addEventListener('click', function(){
fetch('https://api.thecatapi.com/v1/images/search').then(response => image.src = response.url)
})
*/

// Fonctions fléchées the two functions below are identical

function add(numA, numB) {
    console.log(numA + numB);
}

const arrowAdd = (numA, numB) => { // we can use var or let, but better to use const because the function will not change
    console.log(numA + numB);
}

add(3, 5);
arrowAdd(3, 5);
add(8, 8)

// Other ways to write Loops

var addArray = [1, 2, 4, 5]
console.log(addArray)
const mapArray = addArray.map(x => x+1)
console.log(mapArray)
var addArrayTwo = [5, 7, 12, 4]
console.log(addArrayTwo)
//the first parameter x is the itemm, and the second i is the index
const mapArrayTwo = addArray.map((x, i) => x + addArrayTwo[i])
console.log(mapArrayTwo)

addArrayTwo.forEach (x => console.log(x))

const zeroArray = [5, 7, 8, 10]
function hasZero(element) {
    if (element >= 4) {
        return true
    } else {
        return false
    }
}
   console.log(zeroArray.every(hasZero))