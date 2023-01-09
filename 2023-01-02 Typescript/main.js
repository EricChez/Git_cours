console.log('ok');
var jambon = "Jambon"; // le type de la variable jambon est 'string'
var x = 21; // le type de la variable x est 'number
var mix; // le type de la variable mix est 'any'
// x = "tata" // x ne peut pas prendre la valeur 'tata' car c'est un type 'number'
// on peut forcer le type d'une variable en mettant 'nom de la variable: type de la variable'
var y; // pour définir le type de la variable sans l'initialiser
var stringTwo;
var isLive;
// tableaux
var arrayOne = []; // un tableau de nombre, et puisque c'est un tableau, il faut l'initialiser dès le départ
arrayOne.push(4);
console.log(arrayOne);
arrayOne.push(55423);
console.log(arrayOne);
// arrayOne.push(true); // on ne peut pas push() un boolean parce que c'est un tableau de number
var arrayMix = []; // pour créer un tableau de variables de différents types
arrayMix.push(4);
arrayMix.push(55423);
arrayMix.push(true);
console.log(arrayMix);
// const arrayBool: boolean[] = []; // cette écriture peut être remplacée par ce qui suit, aussi utilisé dans les plupart des autres langages de programmation
var arrayBool = [];
// Tuple : ce sont des tableaux initialisé de la façon suivante
// on peut les utiliser pour générer des API par exemple
var tupleOne; // c'est maintenant un tableau qui aura toujours cette même structure : un string en index 0, un nombre en index 1, un booléen en index 2
tupleOne = ["salade", 45, false];
// tupleOne = ["ail", 74, "papaye"] // 'papaye' ne peut être assigné à l'index 2 car le tuple de tupleOne demande un booléen
var tupleTwo;
tupleTwo = [421, ['one', 'two', 'three']];
console.log(tupleTwo);
// tupleTwo = [421, [1, 2, 3]]; // cela ne marchera pas car le tuple demande un tableau de string
var tupleThree;
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
var Role;
(function (Role) {
    Role[Role["Administrateur"] = 0] = "Administrateur";
    Role[Role["Moderateur"] = 1] = "Moderateur";
    Role[Role["Visiteur"] = 2] = "Visiteur";
})(Role || (Role = {}));
var role = Role.Administrateur;
if (role === Role.Administrateur) {
    console.log("Vous êtes l'administrateur de ce site !");
    console.log(Role.Administrateur);
    console.log(Role[0] + " a pour index " + Role.Administrateur);
}
// Type ANY
// le type 'any' accepte n'importe quel type. Cependant, il est source de bugs, donc à éviter
var foo;
foo = 14;
foo = 'fourteen';
foo = false;
console.log(foo);
var num;
num = 41;
console.log(num);
num = foo;
console.log(num); // c'est pourquoi l'utilisation de 'any' peut être problématique : si on assigne une varialbe typé à une variable 'any', même si elle n'a pas le même type, la variable change de type. Any vient de créer un bug. C'est la raison pour laquelle, nous avons aussi le type 'unknown'
// type UNKNOWN
// comme 'any', il peut être de n'importe quel type
var bar;
var numTwo;
numTwo = 50;
bar = 78;
// numTwo = bar; // we get an error message
if (typeof (bar) === 'number') { // en forçant la vérification, on se débarasse de l'erreur
    numTwo = bar;
    console.log(numTwo);
}
console.log(typeof (bar));
bar = 'hello';
console.log(typeof (bar));
// type OBJECT
// les objets sont toujours des const aussi
/*
const obj = {
    name:"Jake",
    age: 12,
    hobbies: ['foot', 'music']
}
*/
var obj = {
    name: "Jake",
    age: 12,
    hobbies: ['foot', 'music']
};
obj.age = 41;
console.log(obj);
// obj.hobbies = [true, false] // ne marche pas parce que hobbies est un tableau de cbaînes de caractères et non pas de booléens
// types null et undefined
var jesersarien;
jesersarien = undefined;
var jesuisnul;
jesuisnul = null;
// type Numeral
var cinquante; // pour forcer une variable à être un chiffre
cinquante = 50;
// cinquante = 51; // ne marche pas
var bonjour;
bonjour = "bonjour";
var autreCinquante;
// autreCinquante = 50; // ne marche pas cette fois
// Les fonctions
var func = function (x, y) {
    return x + y;
};
console.log(func(1, 2));
var mult = function (x, y) {
    return x * y;
};
console.log(mult(50, 10));
// Exo: faire une fonction inutile(phrases, multiplier)
// phrases = tableau de string
// multiplier = nombre
var sentences = [];
sentences.push("Le jus de pomme est bon");
sentences.push("La mouflette sent la mort à plein nez");
sentences.push("On a dit qu'on ne touchait pas aux mamans");
console.log(sentences);
var inutile = function (sentenceArray, multiplier) {
    sentenceArray.forEach(function (element) {
        var li = "<li>La phrase : <i>" + element + "</i> a " + red(element.length) + " caractères et un score de " + green(element.length * multiplier) + ".</li>";
        document.getElementById("firstList").innerHTML += li;
        //console.log(li);
    });
};
var red = function (firstNum) {
    return "<span style='color:red'>" + firstNum + "</span>";
};
var green = function (secondNum) {
    return "<span class='green'>" + secondNum + "</span>";
};
console.log(sentences[0]);
console.log(sentences[0].length);
inutile(sentences, 10);
// correction de l'exercice
var arraySentence = ["Le jus de pomme est bon", "La mouflette sent la mort à plein nez", "On a dit qu'on ne touchait pas aux mamans"];
var ul = document.getElementById("secondList");
function useless(array, multiplier) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var sentence = array_1[_i];
        var sentenceLength = sentence.length;
        var score = sentenceLength * multiplier;
        // console.log(`The sentence : ${sentence} has a length of ${sentenceLength} characters and a score of ${score}.`);
        var li = document.createElement('li');
        var liString = "<li>The sentence : <i>".concat(sentence, "</i> has a length of ").concat(pink(sentenceLength), " characters and a score of ").concat(darkred(score), ".</li>");
        li.innerHTML = liString;
        ul.appendChild(li);
    }
}
var pink = function (num) {
    return "<span class=\"pink\">".concat(num, "</span>");
};
var darkred = function (num) {
    return "<span class=\"darkred\">".concat(num, "</span>");
};
useless(arraySentence, 12);
// type HTMLElement
// Vivien's code
var arraySentences = ["Le jus de pomme est bon", "La mouflette sent la mort à plein nez", "On a dit qu'on ne touchait pas aux mamans"];
var list = document.getElementById("thirdList");
function inutileTwo(phrases, multiplier) {
    var result = "";
    for (var _i = 0, phrases_1 = phrases; _i < phrases_1.length; _i++) {
        var phrase = phrases_1[_i];
        var li = void 0;
        li = document.createElement('li');
        var numLetters = phrase.length;
        var numMultiplier = numLetters * multiplier;
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
function colorize(num, color) {
    var span = "";
    span = "<span style=\"color: ".concat(color, "\">").concat(num, "</span>");
    return span;
}
inutileTwo(arraySentences, 8);
// Les fonctions peuvent avoir des paramètres optionnels
function coucou(name) {
    if (!name) {
        console.log("Coucou");
    }
    else {
        console.log("Coucou " + name);
    }
}
coucou('Jean-Marc');
coucou();
function setMarginBottom(element, margin) {
    var firstLi = element.firstElementChild;
    if (typeof margin === "string") {
        firstLi.style.marginBottom = margin;
    }
    else {
        var numToString = margin.toString() + "px";
        firstLi.style.marginBottom = numToString;
    }
}
setMarginBottom(list, 100);
var textNumber;
textNumber = "50";
textNumber = 50; // avec l'union, la variable peut prendre le type string ou number
var chelou;
chelou = [true, false];
chelou = 45;
chelou = document.createElement('div');
var cheloulou; // this is a bit long to write
var chelouThree;
chelouThree = 41;
console.log(chelouThree);
// GENERIC
function returnNum(num) {
    return num;
}
returnNum(45); // returns 45
function returnAny(x) {
    return x;
}
returnAny("great"); // but we want to know the type returned, so we'll use generics
function generic(x) {
    return x;
}
generic(20);
generic(false);
// REST
function greet(lang, persons) {
    var greeting = lang + " ";
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var person = persons_1[_i];
        greeting += person + " ";
    }
    return greeting;
}
console.log(greet("Guten Tag", ["Helmut", "Greta", "Bertha"]));
function greeting(firstPerson) {
    var persons = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        persons[_i - 1] = arguments[_i];
    }
    var greetings = "Bonjour " + firstPerson + " ";
    for (var _a = 0, persons_2 = persons; _a < persons_2.length; _a++) {
        var person = persons_2[_a];
        greetings += person + " ";
    }
    return greetings;
}
console.log(greeting("Albert", "Helmut", "Greta", "Bertha", "Ursula"));
function getTotal() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var total = 0;
    num.forEach(function (nb) { return total += nb; });
    return total;
}
console.log(getTotal(3254, 526, 58, 4795));
var arrayTest = [12, 18, 45];
console.log(getTotal.apply(void 0, arrayTest));
// En général, on utilise un reste après les autres arguments, c-à-d en dernier
function job(job) {
    var persons = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        persons[_i - 1] = arguments[_i];
    }
    return persons.join(", ") + " sont des " + job + "s";
}
console.log(job("codeur", "Tony", "Manu", "Eric", "et les autres"));
