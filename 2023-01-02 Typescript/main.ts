console.log('ok');
let jambon = "Jambon"; // le type de la variable jambon est 'string'
let x = 21; // le type de la variable x est 'number
let mix; // le type de la variable mix est 'any'
// x = "tata" // x ne peut pas prendre la valeur 'tata' car c'est un type 'number'

// on peut forcer le type d'une variable en mettant 'nom de la variable: type de la variable'
let y: number; // pour définir le type de la variable sans l'initialiser
let stringTwo: string;
let isLive: boolean;

// tableaux
const arrayOne: number[] = []; // un tableau de nombre, et puisque c'est un tableau, il faut l'initialiser dès le départ
arrayOne.push(4);
console.log(arrayOne);
arrayOne.push(55423);
console.log(arrayOne);
// arrayOne.push(true); // on ne peut pas push() un boolean parce que c'est un tableau de number

const arrayMix: any[] = []; // pour créer un tableau de variables de différents types
arrayMix.push(4);
arrayMix.push(55423);
arrayMix.push(true);
console.log(arrayMix);

// const arrayBool: boolean[] = []; // cette écriture peut être remplacée par ce qui suit, aussi utilisé dans les plupart des autres langages de programmation
const arrayBool: Array<boolean> = [];
// Tuple : ce sont des tableaux initialisé de la façon suivante
// on peut les utiliser pour générer des API par exemple
let tupleOne: [string, number, boolean]; // c'est maintenant un tableau qui aura toujours cette même structure : un string en index 0, un nombre en index 1, un booléen en index 2
tupleOne = ["salade", 45, false];
// tupleOne = ["ail", 74, "papaye"] // 'papaye' ne peut être assigné à l'index 2 car le tuple de tupleOne demande un booléen

let tupleTwo: [number, string[]];
tupleTwo = [421, ['one', 'two', 'three']];
console.log(tupleTwo);
// tupleTwo = [421, [1, 2, 3]]; // cela ne marchera pas car le tuple demande un tableau de string

let tupleThree: [boolean, any];
tupleThree = [true, 21];
// tupleThree.push(true); // les trois .push() ne devraient pas fonctionner, mais ils fonctionnent
// tupleThree.push('hello');
// tupleThree.push('bye');
console.log(tupleThree);

// ENUM :  leur rôle est de rendre des chiffres plus lisibles

// Imaginons qu'il y ait plusieurs rôles chez les utilisteurs
// Administrateur = 0
// Moderateur = 1
// Visiteur = 2

enum Role {
    Administrateur, // Administrateur = 75, pour forcer les numéros, mais il va s'incrémenter de 1 pour les suivants automatiquement
    Moderateur,
    Visiteur
}

let role = Role.Administrateur;
if (role === Role.Administrateur) {
    console.log("Vous êtes l'administrateur de ce site !");
    console.log(Role.Administrateur);
    console.log(Role[0] + " a pour index " + Role.Administrateur);
}

// Type ANY
// le type 'any' accepte n'importe quel type. Cependant, il est source de bugs, donc à éviter
let foo: any;
foo = 14;
foo = 'fourteen';
foo = false;
console.log(foo);

let num: number;
num = 41;
console.log(num);
num = foo;
console.log(num); // c'est pourquoi l'utilisation de 'any' peut être problématique : si on assigne une varialbe typé à une variable 'any', même si elle n'a pas le même type, la variable change de type. Any vient de créer un bug. C'est la raison pour laquelle, nous avons aussi le type 'unknown'

// type UNKNOWN
// comme 'any', il peut être de n'importe quel type
let bar: unknown;
let numTwo: number;
numTwo = 50;
bar = 78;
// numTwo = bar; // we get an error message
if (typeof(bar) === 'number') { // en forçant la vérification, on se débarasse de l'erreur
    numTwo = bar;
    console.log(numTwo);
}
console.log(typeof(bar));
bar = 'hello';
console.log(typeof(bar));

// type OBJECT

// les objets sont toujours des const aussi
/*
const obj = {
    name:"Jake",
    age: 12,
    hobbies: ['foot', 'music']
}
*/
const obj: {
    name: string,
    age: number,
    hobbies: string[]
} = {
    name: "Jake",
    age: 12,
    hobbies: ['foot', 'music']
}
obj.age = 41;
console.log(obj);
// obj.hobbies = [true, false] // ne marche pas parce que hobbies est un tableau de cbaînes de caractères et non pas de booléens

// types null et undefined
let jesersarien: undefined;
jesersarien = undefined;

let jesuisnul: null;
jesuisnul = null;

// type Numeral
let cinquante: 50; // pour forcer une variable à être un chiffre
cinquante = 50;
// cinquante = 51; // ne marche pas

let bonjour: "bonjour";
bonjour = "bonjour";

let autreCinquante: '50';
// autreCinquante = 50; // ne marche pas cette fois

// Les fonctions
const func = function(x: number, y: number)/*: number*/ {
    return x + y;
}
console.log(func(1, 2));

const mult: (x: number, y: number) => number = function(
    x: number, y: number
    ): number {
        return x * y;
    }
console.log(mult(50, 10));

// Exo: faire une fonction inutile(phrases, multiplier)
// phrases = tableau de string
// multiplier = nombre
const sentences: string[] = [];
sentences.push("Le jus de pomme est bon");
sentences.push("La mouflette sent la mort à plein nez");
sentences.push("On a dit qu'on ne touchait pas aux mamans");
console.log(sentences);

const inutile = function (sentenceArray: string[], multiplier: number): void {
    sentenceArray.forEach(element =>  {
        let li: string = "<li>La phrase : <i>" + element + "</i> a " + red(element.length) + " caractères et un score de " + green(element.length * multiplier) + ".</li>";
        document.getElementById("firstList").innerHTML += li;
        //console.log(li);
    })
}
const red = function (firstNum: number) {
    return "<span style='color:red'>" + firstNum + "</span>";
}
const green = function (secondNum: number) {
    return "<span class='green'>" + secondNum + "</span>";
}

console.log(sentences[0]);
console.log(sentences[0].length);
inutile(sentences, 10);

// correction de l'exercice

const arraySentence: Array<string> = ["Le jus de pomme est bon", "La mouflette sent la mort à plein nez", "On a dit qu'on ne touchait pas aux mamans"]

const ul: HTMLElement = document.getElementById("secondList") as HTMLElement;

function useless(array: string[], multiplier: number){
    for (let sentence of array) {
        let sentenceLength: number = sentence.length;
        let score: number = sentenceLength * multiplier;

        // console.log(`The sentence : ${sentence} has a length of ${sentenceLength} characters and a score of ${score}.`);

        const li: HTMLElement = document.createElement('li');

        const liString: string = `<li>The sentence : <i>${sentence}</i> has a length of ${pink(sentenceLength)} characters and a score of ${darkred(score)}.</li>`;
        li.innerHTML = liString;
        
        ul.appendChild(li);
    }
}

const pink = function (num: number) {
    return `<span class="pink">${num}</span>`;
}
const darkred = function (num: number) {
    return `<span class="darkred">${num}</span>`;
}

useless(arraySentence, 12);
// type HTMLElement

// Vivien's code

const arraySentences: Array<string> = ["Le jus de pomme est bon", "La mouflette sent la mort à plein nez", "On a dit qu'on ne touchait pas aux mamans"]
const list: HTMLElement = document.getElementById("thirdList") as HTMLElement;

function inutileTwo(phrases: string[], multiplier: number) {
    let result: string = "";

    for (let phrase of phrases) {
        let li: HTMLElement;
        li = document.createElement('li');
        let numLetters: number = phrase.length;
        let numMultiplier: number = numLetters * multiplier;
        result = "";

        result += phrase + " a ";
        result += colorize(numLetters, "#FF5862");
        result += " lettres et son score est de ";
        result += colorize(numMultiplier, "#808000");

        console.log(result);
        li.innerHTML = result;
        list.appendChild(li);
    }
}

function colorize(num: number, color: string): string {
    let span: string = "";
    span = `<span style="color: ${color}">${num}</span>`;
    return span;
}

inutileTwo(arraySentences, 8);

// Les fonctions peuvent avoir des paramètres optionnels

function coucou(name?: string): void {
    if (!name) { 
        console.log("Coucou");
    } else {
        console.log("Coucou " + name);
    }
}

coucou('Jean-Marc');
coucou();

function setMarginBottom(element: HTMLElement, margin: number | string) {
    let firstLi: HTMLElement = element.firstElementChild as HTMLElement;
    if (typeof margin === "string") {
        firstLi.style.marginBottom = margin;
    } else {
        let numToString: string = margin.toString() + "px";
        firstLi.style.marginBottom = numToString;
    }
}

setMarginBottom(list, 100);

let textNumber: string | number;
textNumber = "50";
textNumber = 50; // avec l'union, la variable peut prendre le type string ou number

let chelou: boolean[] | number | HTMLElement;
chelou = [true, false];
chelou = 45;
chelou = document.createElement('div');

let cheloulou: void | null | undefined | number; // this is a bit long to write
type louche = void | null | undefined | number;
let chelouThree: louche;
chelouThree = 41;
console.log(chelouThree);

// Les interfaces
interface Bird {
    name: string;
    sound: string;
}

// La suite ne marche pas comme Vivien voulait, on oublie
/*
declare function theBird(): Bird; // declare a function without implementing it first

let smallBird = theBird();

smallBird.name = "Corbeau";
smallBird.sound = "Croassse";
console.log(smallBird);
*/
type bird = {
    name: string;
    move: "vole";
}

type reptile = {
    name: string;
    move: "rampe";
}

type animal = bird | reptile

// GENERIC
function returnNum(num: number): number {
    return num;
}

returnNum(45); // returns 45

function returnAny(x: any): any {
    return x;
}
returnAny("great"); // but we want to know the type returned, so we'll use generics

function generic<T>(x: T): T{// T fonctionne comme any, mais infère le type (T is a convention, would work with anything else)
    return x;
}
generic(20);
generic(false);

// REST
function greet(lang: string, persons: string[]): string {
    let greeting: string = lang + " ";
    for(const person of persons) {
        greeting += person + " "
    }
    return greeting;
}

console.log(greet("Guten Tag", ["Helmut", "Greta", "Bertha"]));

function greeting(firstPerson: string, ...persons: string[]): string { //'...' spread operator
    let greetings: string = "Bonjour " + firstPerson + " ";
    for (const person of persons) {
        greetings += person + " "
    }
    return greetings;
}
console.log(greeting("Albert", "Helmut", "Greta", "Bertha", "Ursula"));

function getTotal(...num: number[]): number {
    let total = 0;
    num.forEach((nb: number) => total += nb);
    return total;
}
console.log(getTotal(3254, 526, 58, 4795));

const arrayTest = [12, 18, 45];
console.log(getTotal(...arrayTest));

// En général, on utilise un reste après les autres arguments, c-à-d en dernier

function job(job: string, ...persons: string[]): string { 
    return persons.join(", ") + " sont des " + job + "s";  
}
console.log(job("codeur", "Tony", "Manu", "Eric", "et les autres"))