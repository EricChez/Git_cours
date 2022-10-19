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
