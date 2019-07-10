// ESERCIZIO 1: Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// ESERCIZIO 2: Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// ESERCIZIO 3: Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// console.log('ESERCIZIO 1');

// var studente = {
// 	"nome": "Francesco",
// 	"cognome": "Zanella",
// 	"eta": 22
// };

// console.log(studente);

// for (var key in studente) {
// 	console.log(key + ': ' + studente[key]);
// }





console.log('ESERCIZIO 2');

var studenti = [
	studente1 = {
		"nome": "Francesco",
		"cognome": "Zanella",
		"eta": 22
	}, studente2 = {
		"nome": "Daniele",
		"cognome": "Brandino",
		"eta": 22
	}, studente3 = {
		"nome": "Lorenzo",
		"cognome": "Florenzano",
		"eta": 23
	}
]

console.log('STAMPE EXTRA:');
console.log(studenti);
console.log(studente1);
console.log(studente1.cognome);
console.log('-------------------');

for (var i = 0; i < studenti.length; i++) {
	console.log(studenti[i].nome, studenti[i].cognome);
}





// console.log('ESERCIZIO 2');