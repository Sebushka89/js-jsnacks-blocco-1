
var number = parseInt(prompt('Inserisci il tuo numero'));

for (var i = 1; i <= number; i++){
    document.getElementById("demo").innerHTML += '<br/>' + Math.pow( i , 3);
} 

//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente attraverso un prompt. (modificato) 

