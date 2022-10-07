console.log("Hello World!");
let x = 1;
var y = 3;
console.log(x+y);
let c = 5;
const k = 10;
console.log(k-5);
let w = 9;
w = 10;
console.log(w);
const s = 10;
// s = 78;
// once a const has been declared (or 'initialisée' in french),
// we cannot reassign another value
// we would get an error message on the console
// when there is an error message, the rest of the code is not executed
console.log(s);
x = y;
console.log(x);
console.log(w/2.5);
console.log(w/y);
console.log(w*y);
console.log(w%y);
// Structures conditionnelles: if = si
// si w = k, alors j'écris 'Bonjour !'
if (w==k) {
    console.log("Bonjour !");
}
// 'if block' written above
// if...(condition...) {expression...} = this is the structure of an if block
// == condition d'égalité
// === condition stricte d'égalité
// 55=='55' returns true
// 55==='55' retruns false
z = 55;
v = "55"
console.log(v + z);
if (z==v) {
    console.log("cinquante-cinq");
}
let bonjour = "Salut";
let bonjour02 = "les gars !"
console.log(bonjour + " " + bonjour02);
// NOT condition: !=
if (c!=x) {
    console.log(c + " n'est pas égal à " + x);
}
let bool = true;
console.log(bool);
console.log(!bool);
if (bool) {
    console.log("It is " + bool);
}
bool = false;
if (!bool) {
    console.log("It is " + bool);
}
// if...else
if (!bool) {
    console.log("It is " + bool)
} else {
    console.log("It is " + bool)
}
// > or <
if (w<c) {
    console.log("w est inférieur à c");
} else {
    console.log("w est supérieur à c");
}
// >= or <=
// query selectors
var titre = document.getElementsByClassName("titre");
// the variable titre will get all the elements of class "titre"
console.log(titre);
var secondTitle = document.getElementById("h2-modifier");
console.log(secondTitle);
// to change the string in the title
secondTitle.innerHTML = "Bonjour !";
let paragraph = document.querySelector(".paragraph");
console.log(paragraph);
// somehow, a querySelector is preferable, though getElementBy is perfectly valid
let parentImage = document.querySelector(".parent-image");
var image = document.createElement("img");
// the element image exists but is empty, we need to add attributes
image.setAttribute("src", "Images/catOne.jpg");
parentImage.appendChild(image);
// setAttribute is function whose role is to ...

// a function accepts arguments, here two arguments, one attribute and one value for this attribute
// a function is a block of code which always does the same thing
// function names are always in Camel case
function addition(nbA, nbB) {
    let result = nbA + nbB;
    console.log(result);
}
addition(1000, 2000);
addition(21, 36);

function soustraction(nbA, nbB) {
    return result = nbA - nbB;
}
let trueResult = soustraction(50, 27);
console.log(trueResult);
// we usually only use console.log to debug our code

// Exercise One
// Create a function AmITall which verifies our height in cm
// if height over 1.70m we are tall
// else we are short

function AmITall(height) {
    if (height >= 170) {
        console.log("Vous êtes grand !");
    } else {
        console.log("Vous êtes petit !");
    }
}
let height = 169;
AmITall(height);
let vh = 180;
AmITall(vh);
AmITall(150);
AmITall(190);

// Exercise Two
// Create a function to tell us if a number is divisible by another one

function isDivisible(Num, Den) {
    if (Num % Den == 0) {
        console.log(Num + " est divisible par " + Den);
    } else {
        console.log(Num + " n'est pas divisible par " + Den);
    }
}
isDivisible(10, 5);
isDivisible(10, 3);
// Correction
function isDivisibleTwo(Num, Den) {
    let result = Num % Den;
    if (result == 0) {
        console.log("elle n'a pas de reste");
    } else {
        console.log("elle a un reste");
    }
}

// var & let
let myFirstVariable = 10;
// myFirstVariable = true;
// this will change the value of the variable
// let myFirstVariable = 10;
// Will return an error message, because the variable has already been declared

var myNewVariable = 12;
console.log(myNewVariable);
var myNewVariable = 15;
console.log(myNewVariable);


function letTest() {
    let test = "Joconde";
    var testThree = "Jean-Pierre";
    if (true) {
        console.log(test);
        console.log(testThree);
    }
}
letTest();
testThree = "Jean-Michel";
letTest();

function letTestAgain() {
    let test = "Léonard de Vinci";
        console.log(test);
        console.log(testThree);
    }
letTestAgain();

function newLetTest() {
    let x = 31;
    if (true) {
      let x = 71;  // c'est une variable différente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
newLetTest();
function newVarTest() {
    var x = 31;
    if (true) {
      var x = 71;  // c'est la même variable
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
newVarTest();
// let has a block scope
// var has a function scope

// switch

function testNumber(num) {
    switch(num) {
        case 0:
            console.log("Je suis le nombre " + num);
            break;
        case 1:
            console.log("Je suis le nombre " + num);
            break;
        case 2:
            console.log("Je suis le nombre " + num);
            break;
        case 3:
            console.log("Je suis le nombre " + num);
            break;
        default: // ALWAYS put a default at the end of a switch
            console.log("Je suis strictement supérieur à 3");
    }
}
testNumber(5);
testNumber(0);
testNumber(2);

var myFirstArray = [];
var mySecondArray = [1, 2, 3, 4, "banana"]; // 5 index dans ce tableau
// numérotés à partir de zéro
var un = mySecondArray[0];
console.log(un);
console.log(mySecondArray);
console.log(mySecondArray.length);// this function returns the size of the array
// in JS, we can mix different types of variables with the same array
console.log(mySecondArray[0] + " " + mySecondArray[4]);
console.log(mySecondArray[9]);
myFirstArray.push("Jeremy"); // to add elements to the array
console.log(myFirstArray);
myFirstArray.push("Kevin B"); // one after the other
console.log(myFirstArray);
myFirstArray.push("Quentin");
console.log(myFirstArray);
myFirstArray.pop(); // delete the last element of the array
console.log(myFirstArray);
myFirstArray.shift();
console.log(myFirstArray); // delete the first element of the array
myFirstArray.unshift("Renaud"); // adds an element at the beginning of the array
console.log(myFirstArray);
let indexRenaud = myFirstArray.indexOf("Renaud");
console.log("Renaud has " + indexRenaud + " for index");
console.log("Banana has " + mySecondArray.indexOf("banana") + " for index");
mySecondArray.splice(1, 2); // suppress 2 elements from index 1
console.log(mySecondArray);

let banana = "one banana";
console.log(banana[5]);// gives the 6th letter of the string
// in fact a string is an array
// arrays are objects
// a function in an object is called a method
// in all languages, a method is a function in an object

// Object creation
var voiture = {
    marque: "Renault", // this is an attribute
    annee: "2005", // we'll see later that dates are in fact objects
    puissance: 125,

    afficher: function() {
        console.log("Cette voiture est une " + this.marque + " de l'année " + this.annee + ", elle a " + this.puissance + " chevaux.")
    },
}
// when creating an object, we always put the variables at the top,
// and the methods after

voiture.afficher();
// an object is a collection of parameters and functions
console.log(voiture.marque);

// LOOPS

// 'While' Loop
var iteration = 0;
while (iteration < 7) {
    console.log(iteration);
    iteration++;    // or iteration += 1
                    // or iteration = iteration + 1
}

// 'For' Loop
for (let i = 0; i < 12; i++) { // for (i = 0; i <12; i++) works just as well but does not seem to be the correct syntax
    console.log(i);
}
for (let j = 0; j < mySecondArray.length; j++) {
    console.log(mySecondArray[j]);
}

// 'Do ... while' Loop
let doLoop = 0;
do {
    console.log(doLoop);
} while (iteration < 0) {
    console.log(doLoop);
    doLoop++;
}

iterationBreak = 0;
while (iterationBreak < 80) {
    console.log(iterationBreak);
    iterationBreak++;
    if (iterationBreak > 47) {
        break;
    }
}
// function to calculate factorial
function factorial(num) {
    var f = 1;
    for (let k = 1; k<= num; k++) {
        f *= k;
    }
    console.log(f);
}
factorial(1);

// recursive function to calculate factorial
function factor(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factor(num - 1); // this is the bit that will stop the function
        // at some point when we get to factor(0)
    }
}// an executed return stops a function
console.log(factor(4));
console.log(factor(1));
console.log(factor(5));

// Exo: concatenation of two arrays of same length, one element by one element
var arrA = ['Jeanette', 'Alphonse', 'George', 'Ludwig'];
var arrB = ['Paul', 'Frédéric', 'Jacques', 'Roger'];
function arrMerge(arrA, arrB) {
    let lengthA = arrA.length;
    let lengthB = arrB.length;
    let arrC = [];
    if (lengthA !== lengthB) {
        console.log("Vos tableaux doivent avoir la même taille !");
    } else {
        for (let i = 0; i < arrA.length; i++) {           
            arrC.push(arrA[i], arrB[i]);
        }
    }
    console.log(arrC);
}
arrMerge(arrA, arrB);

// Correction
function concatArray(arrA, arrB) {
    if (arrA.length === arrB.length) {
        for (let index = 0; index < arrB.length; index++){
            console.log(arrA[index] + ' ' + arrB[index]);
        }
    } else {
            console.log("Les tableaux n'ont pas la même taille.")
        }
    }
concatArray(arrA, arrB);