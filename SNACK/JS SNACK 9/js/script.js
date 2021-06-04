//Calcola la somma e la media dei primi 10 numeri.

var number = [1,2,3,4,5,6,7,8,9,10]
var inputLen = number.length;
var result = 0

for (i = 0; i < inputLen; i++){
    result += number[i];
}

var average = (result/number.length) 
console.log(result)
console.log(average)

document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = average;