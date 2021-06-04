//Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
var number = parseInt(prompt('Inserisci il tuo numero'));

for (var i = 1; i <= number; i++){
    if (number % 2 === 0){
        document.getElementById("demo").innerHTML = number;
    } else {
        document.getElementById("demo1").innerHTML = number + 1;
    }    
} 