// variabili form
var inputnome = document.getElementById("nome_");
var inputkm = document.getElementById("km");
var inputeta = document.getElementById("age_");

// variabili bottone
var btgenera = document.getElementById("return_gen");
var btannulla = document.getElementById("return_ann");

// variabili div nascosto
var info = document.getElementById("info_");

var nome = document.getElementById("nomeps");
var sconto = document.getElementById("sconto");
var cp = document.getElementById("cp");
var posto = document.getElementById("posto");
var costo = document.getElementById("costo_");

// attraverso click div info_ diventa display block
btgenera.addEventListener('click',
 function() {

   var km = parseInt(inputkm.value);
   var eta = inputeta.value;
   var nome = inputnome.value;

  info.style.display= "block";

  // definire variabili per calcolo biglietto
  var tariffa = km * 0.21;
  var tariffaminorenne = (tariffa / 100 * 20);
  var tariffaanziani = (tariffa / 100 * 40);

  // definire condizioni in base all'età per calcolo biglietto
  if (eta === "Minorenne") {
    tariffa = tariffa - tariffaminorenne;
  } else if (eta === "Over65") {
    tariffa = tariffa - tariffaanziani;
  } else if (eta === "Adulto") {
    tariffa = tariffa;
  }

  // stampare dati costo, cp, posto, e nome passeggero
  costo.innerHTML = tariffa.toFixed(2) + " Euro";

  cp.innerHTML = (Math.floor(Math.random() * 100000) + 90000);

  posto.innerHTML = (Math.floor(Math.random() * 100) + 1);

  nomeps.innerHTML = inputnome.value;

  // parte sconto con condizioni
  if (eta === "Minorenne") {
    sconto.innerHTML = "Hai diritto al 20% di sconto " + tariffaminorenne + "Euro";
  } else if (eta === "Over65") {
    sconto.innerHTML = "Hai diritto al 40% di sconto " + tariffaanziani + "Euro";
  } else if (eta === "Adulto") {
    sconto.innerHTML = "Non hai diritto a nessuno sconto";
  }

}
);

// parte bottone annulla
btannulla.addEventListener('click',
 function() {
   info.style.display= "none";
} );
