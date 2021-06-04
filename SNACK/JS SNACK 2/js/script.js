var xx = prompt('Inserisci la tua parola');
var yy = prompt('Inserisci la tua nuova parola');


if ( xx.length < yy.length ){
    document.getElementById('data').innerHTML = xx + '<br/>' + yy;
} else if ( xx.length == yy.length){
    document.getElementById('data').innerHTML = xx + '  ' + yy;
} else ( xx.length > yy.length ){
    document.getElementById('data').innerHTML = yy + '<br/>' +  xx;
}

//L’utente inserisce due parole in successione, con due prompt.Il software stampa prima la parola più corta, poi la parola più lunga.