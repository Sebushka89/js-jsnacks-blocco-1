var user = prompt('Inserisci il tuo nome');
var userList =['marco','sebastian','paolo','luca','lillo']
var check = false;

for (var i = 0; i < userList.length; i++) {
    if (userList[i] === user) {
        check = true;
    } 
}
if (check === true){
    document.getElementById('benvenuto').innerHTML = 'Accesso consentito!!!';
} else {
    alert('Accesso negato');
}

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.