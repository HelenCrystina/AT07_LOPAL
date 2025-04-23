/*1 - Escreva um programa em JavaScript que solicite ao usuário dois números inteiros:
um número inicial e um número final. Verifique e imprima no console do navegador todos os números pares
entre o número inicial e o número final (inclusive). Inverter a ordem dos números caso o número final seja 
menor que o número inicial.*/

let numInicialdig = parseInt(prompt("Digite um número inicial"));
let numFinaldig = parseInt(prompt("Digite um número final"));

if (isNaN(numInicialdig)) {
    alert("Tente novamente, e digite um número!");
} else if (numInicialdig > numFinaldig) {
    console.log("Opa, acho que você inverteu os valores!! Mas não tem problema, inverti os valores novamente para você");
    let numInvertido = numInicialdig;
    numInicialdig = numFinaldig;
    numFinaldig = numInvertido;
}
console.log(`Os numeros pares do intervalo de ${numInicialdig} ao ${numFinaldig} é:`)
for (let n = numInicialdig; n <= numFinaldig; n++) {
    if (n % 2 == 0) {
        console.log(n);
    }

}