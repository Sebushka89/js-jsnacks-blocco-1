//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.
var listName = ["Federico","Seba","Andrea","Elisa","Paolo","Luca"];
var listSurname = ["Musso","Rizzo","Boccia","Boido","Bonolis","Laurenti"];
var list = [];

while (list.length < 3){
  var invitato = (listName[Math.floor(Math.random() * listName.length)] + ' ' + listSurname[Math.floor(Math.random() * listSurname.length)]);
  if(!list.includes(invitato)){
    list.push(invitato);
    document.getElementById('demo').innerHTML += '<li>' +  invitato + '</li>';
  }
}

console.log(list);
