var btn = document.getElementById("btn-one"); /* 'Element' is singular because
only a single element with that id */
var element = document.getElementsByClassName("square-one");/* 'Elements' is plural
because there are several elements in the class */
var el = element[0]; /* we need to add index [0],
because we're dealing with an array element containing several elements with
the same class */
console.log(element);

btn.addEventListener("click", function(){ /* here, we call an anynymous function */
    el.classList.add('transformation-size'); 
})

el.addEventListener('transitionend', function(){
    /* or using the shorthand arrow anonymous function:
        function(){} === ()=>{} */
    this.classList.remove('transformation-size');
    /* or el.classList.remove('transformation-size';*/
})

// other way of writing the above lines of code
/*
el.ontransitionend = () => {
    el.classList.remove('transformation-size');
}
*/
var act = document.getElementById("activate");
var rem = document.getElementById("remove");
var elementTwo = document.getElementsByClassName("moving-square");
var elementTwo = elementTwo[0];

/*
the activate button adds the 'forward-trans' class to the moving-square element
*/
act.addEventListener("click", function(){
    elementTwo.classList.add('forward-trans');
})

/*
the remove button remove the 'forward-trans' class from the moving-square element
*/
rem.addEventListener("click", function(){
    elementTwo.classList.remove('forward-trans');
})
/*
    setInterval est une fonction, un timer, qui recommence,
    for sth he had done with a toggle, like a loop thing, grows
    and reduces endlessly
*/

/* 
    Le cours du 20/10/2022 commence ici
*/
var onClick = document.getElementById("Click");
onClick.addEventListener("click", function(){
    onClick.innerHTML = "C'est cliqué";
    /*  
        innerHtml n'est pas une fonction, on ne met donc pas de parenthèses,
        mais un signe égal avec un string à droite
    */
})

var doubleClick = document.getElementById("doubleClick");
// on récupère le bouton dans une variable
// we get the button element in a variable
var doubleClickMsg = document.getElementById("doubleClickMsg");
// on récupère le paragraph dans une variable
// we get the paragraph element in a variable
doubleClick.addEventListener("dblclick", function(){
    // the event here is a double click
    doubleClickMsg.innerHTML = "Vous avez bien cliqué deux fois, bravo !";
    // we insert some text in the paragraph
})

var inputFocus = inputFocus = document.getElementById("inputFocus");
// les ';' ne sont pas nécessaire en JS
inputFocus.placeholder = "Type your three wishes here !";

// input event
var inputMsg = document.getElementById("inputMsg");
inputFocus.addEventListener("input", function(){
    inputMsg.innerHTML = inputFocus.value;
    // here we attribute directly the value of the variable,
    // we don't write the script manually
})

// When we click on the checkbox, the title turns red
// checkbox is a change event
// we can use add, remove and toggle
var checkbox = document.getElementById("input-checkbox");
checkbox.addEventListener("change", function(){
    onClick.classList.toggle("red");    // we add the class .red, defined in style.css, to the title
                                        // the onClick variable has been declared further up
    // when the checkbox is checked, the title's font color turns red
    // when the checkbox is unchecked, the title reverts back to the initial font color
})

