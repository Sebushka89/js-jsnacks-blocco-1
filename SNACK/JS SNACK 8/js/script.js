//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)

var userNumber = prompt('Inserisci un numero di 4 cifre')
var inputLen = userNumber.length;
var result = 0

for (i = 0; i < inputLen; i++){
    result += parseInt(userNumber[i]);
} if (inputLen !== 4 ){
        alert('Inserisci un numero composto da 4 cifre');
    } else if (isNaN(userNumber)) { 
        alert('Inserisci un numero composto obbligatoriamente da cifre!!!');
} 
        
    
  console.log(result)
  document.getElementById("demo").innerHTML = result