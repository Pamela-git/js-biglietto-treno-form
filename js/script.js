// variabili form
var inputnome = document.getElementById("nome_");
var inputkm = document.getElementById("km");
var inputeta = document.getElementById("age_");

// variabili bottone
var btgenera = document.getElementById("return_gen");
var btannulla = document.getElementById("return_ann");

// variabile div nascosto
var info = document.getElementById("info_");

// attraverso click div info_ diventa display block
btgenera.addEventListener('click',
 function() {
  info.className = "info_block";
}
);
