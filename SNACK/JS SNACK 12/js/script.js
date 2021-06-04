//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.
var listName = ["Federico","Seba","Andrea","Elisa","Paolo","Luca"];
var listSurname = ["Musso","Rizzo","Boccia","Boido","Bonolis","Laurenti"];
var list = [];

for ( var i = 1; i <= 3; i++) {

  list.push(listName[Math.floor(Math.random() * listName.length)] + ' ' + listSurname[Math.floor(Math.random() * listSurname.length)]);

}
  document.getElementById('demo').innerHTML = list;
  console.log(list);
