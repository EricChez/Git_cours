/* My effort

let forename = $('#forename')
forename.change(function(){
    console.log(forename.val())
    $('#table')
})

let surname = $('#surname')
surname.change(function(){
    console.log(surname.val())
})

let mark =$('#mark')
mark.change(function(){
    console.log(parseInt(mark.val()))
})

let btn = $('#calc')
btn.click(function(){
    let forename = $('#forename').val()
    let surname = $('#surname').val()
    let mark = $('#mark').val()
    var row = "<tr><td>" + forename + "</td><td>" + surname + "</td><td>" + mark + "</td></tr>";
   $("table tbody").append(row);
});
*/

// CORRECTION

// récupérer le bouton
// stocker les données des élèves
// stocker les élèves
// stocker toutes les notes des élèves

// à partir de maintenant 'on click'

// tout d'abord, on vérifie les données
// si les données sont bonnes, on fait ce qui suit:

// on met les informations d'un élève dans un tableau,
// c'est donc un tableau par élève
// on met la note de l'élève dans un tableau
// on met le tableau dans le tableau qui stocke les élèves

// si les données ne sont pas bonnes, on retourne un message d'erreur


// to initialise jQuery
$(document).ready(function(){
// le $ sign est un query selector : on attend que le document se charge

    var btn = $('#calc')
    var student = []
    var allStudents = []
    var mean = []
    // ici on fait des initialisations

    $('#error').hide();

    btn.click(function(){
        let inputNbr = parseInt($('#mark').val());

        if (inputHasNotThisValue('', $('#forename')) && inputHasNotThisValue('', $('#surname')) && inputNbr >= 0 && inputNbr <= 20){
            // on remplit le tableau
            student.push($('#forename').val(), $('#surname').val(), inputNbr);
            allStudents.push(student);
            mean.push(inputNbr);

            tableUpdate();// on affiche le tableau
            valueReset();// on efface les données des inputs
    }
    else {
        $('#error').show().fadeOut(5000);
        valueReset();

    }
    })


    function inputHasNotThisValue(valuecheck, input){
        if (input.val() != valuecheck){
            return true;
        } else {
            return false;
        }
    }
    // on crée une fonction pour remplir le tableau, et on va utiliser un boucle fléchée for each
    function tableUpdate() {
        $('#table .trRemove').remove(); // l'espace entre #table .trRemove est nécessaire
        allStudents.forEach(element => $('#table').append("<tr class='trRemove'><td>" + element[0] + "</td><td>" + element[1] + "</td><td>" + element[2] + "</td></tr>"))

    }

    function valueReset() {
        student = [];
        $('#forename'). val('')
        $('#surname').val('')
        parseInt($('#mark').val(''))
    }    
    
    function meanClass(){

        var meanNote = mean.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return meanNote / mean.length
    }
    meanClass()
    // to check how reduce works
    let eg = [1, 2, 3, 4]
    console.log(eg.reduce((previousValue, currentValue) => previousValue * currentValue, 1))
    // the reduce value

    if (allStudents.length > 1) {
        $('#meanClass').html(meanClass())
    } // this one does not work, guess i'm missing something, either here or elsewhere

})   

/*
    Kevin's Method

    function calcMoyenne(res){
    let b = mean.length;
    for(let i = 0; i < b; i++){
        res = res + mean[i];
    }
    moyenne = res / b;
    $("#meanClass").html(moyenne);
    console.log(mean);
}
*/