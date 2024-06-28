const prompt = require("prompt-sync")({sigint:true});

console.log("Vamos calcular o fatorial de um número");

let numero = prompt("Digite o número: ");

let fatorial = numero;

for(i = 1; i < numero; i++){
    fatorial *= i;
console.log(fatorial);
}
