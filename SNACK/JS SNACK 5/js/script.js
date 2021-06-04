var numberList =[]

for (var i = 1; i <= 6; i++){
    var number = parseInt(prompt('Inserisci il tuo numero'));
    if (number % 2 !== 0){
    numberList.push(number)
    }
} 

console.log(numberList)

//Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.