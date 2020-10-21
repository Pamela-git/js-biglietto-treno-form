//calcolare prezzo biglietto in base all'età e ai km
/*il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65*/

//step 1: chiedere numero di km percorsi
var km = parseInt(prompt("Benvenuto! Scrivi qui quanti km devi percorrere"));
//chiedere età del passeggero
var eta = parseInt(prompt("Scrivi qui la tua età"));
console.log(km, eta);
//calcolo prezzo Biglietto generico

var tariffa = km * 0.21;
console.log( "prezzo biglietto: ", tariffa);

// variabili per tariffe con sconto minorenni e over 65
var tariffaminorenne = tariffa - ((tariffa / 100) * 20);
var tariffaanziani = tariffa - ((tariffa / 100) * 40);

//definire variabile prezzo finale
var prezzo;

//calcolo prezzo biglietto con relative condizioni
if (eta < 18 ) {
  prezzo = tariffaminorenne;
  console.log(tariffaminorenne);
} else if (eta > 65) {
  prezzo = tariffaanziani;
  console.log(tariffaanziani);
} else {
  prezzo = tariffa;
  console.log(tariffa);
}

// output stampo in pagina il prezzo
document.getElementById('prezzo').innerHTML = "Grazie per aver acquistato dal nostro sito, il prezzo del biglietto è: <br>" + prezzo.toFixed(2) + " Euro";
