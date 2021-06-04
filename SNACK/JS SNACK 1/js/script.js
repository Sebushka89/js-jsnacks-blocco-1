var xx = parseInt (prompt('Inserisci il tuo numero'));
var yy = parseInt (prompt('Inserisci il tuo nuovo numero'));


if ( xx > yy ){
    document.getElementById('data').innerHTML = 'stampato il maggiore!!!';
} else if ( xx == yy) {
    document.getElementById('data').innerHTML = 'quale scelgo?';
} else {
    document.getElementById('data').innerHTML = 'non stampo niente?';
}

//L’utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore.