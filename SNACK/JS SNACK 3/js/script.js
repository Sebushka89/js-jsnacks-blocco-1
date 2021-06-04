var result = 0;

for (var i = 1; i <= 10; i++){
    var number = parseInt(prompt('Inserisci il tuo numero'));
    result += number;
}
document.getElementById('data').innerHTML = result;

//il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.