//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.
//for
var result = 0;

for (var i = 1; i <= 5; i++){
    var number = parseInt(prompt('Inserisci il tuo numero'));
    result += number;
} 

console.log(result);

document.getElementById("demo").innerHTML += 'La somma è :' + result;


//while
var sum = 0;
var y = 1;

while(y <= 5) {
    var numberWhile = parseInt(prompt('Inserisci il tuo numero'));
    sum += numberWhile; 
    y++;
}

console.log(sum);
document.getElementById("demo1").innerHTML += 'La somma è :' + sum;