// to initialise jQuery
$(document).ready(function(){
    console.log($('.titre'));
    $('.titre').html("coucou")
    $('p:last').css('color', 'red')
    $('p:last').css({'color': 'red', 'background-color': 'cyan'})
    console.log($('#input'))

/*    $('#num').change(function(){
        console.log($('#num').val())
    })
*/

// this is the same as above, but a bit more readable
// we just declared a new variable with the value of $('#num)
// to make the code less cumbersome
        let num = $('#num')
        num.change(function(){
            console.log(num.val()) // returns a string, not an integer
        })

       
// First exercise

        let btn = $('#sum')
        btn.click(function(){
            let firstAdd = parseInt($('#firstAdd').val())
            // we use parseInt to get an integer and not a string
            let secAdd = parseInt($('#secondAdd').val())
            let result = firstAdd + secAdd
            $('#result').html(result)
        })

/* Correction de l'exercice
        $('#sum').click(function(){
            let result = parseInt($('#firstAdd'). val()) + parseInt($('#secondAdd').val())
            $('#result').html(result);
        })
*/

// Second exercise

    let pCaps = $('#allCaps').html();
    // when we leave the brackets empty, we recuperate the value
    // when we write sth in the brackets, we change the value
    // here we don't want val, because not a value as such, but more a content (?)
    $('#allCaps').html(pCaps.toUpperCase());

// Third exercise : create list in a ul
// $('#list').append('<li>Paul</li>')

let stagiaire = ['Kevin', 'Eric', 'Renault', 'Emmanuel', 'Quentin', 'Michael', 'Anthony', 'Jeremy', 'Tony']

        for (let i = 0; i < stagiaire.length; i++) {
            let listName = stagiaire[i]
            console.log(listName);
            $('#list').append('<li>' + listName + '</li>') //concatenation necessary here, but I don't really understand why
        }

        for (let i = stagiaire.length-1; i >= 0; i--) {
            let listName = stagiaire[i]
            console.log(listName);
            $('#list').append('<li>' + listName + '</li>')
        }

    })

// $ => is equivalent to this element, like query selectors
// .ready => we wait for the document to load fully
