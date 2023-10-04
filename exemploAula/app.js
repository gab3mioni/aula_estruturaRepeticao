let numero = parseInt(prompt("Digite o número inicial"))
let numero2 = parseInt(prompt("Digite o número final"))

if ( numero > 1 && numero2 > 1 ) {
    if(numero>numero2) {
    let aux = numero
    numero = numero2
    numero2 = aux
}

let soma = 0
for ( let i = numero; i <= numero2; i++) {
    soma+= i;
}
console.log(soma);
} else {
    console.log("Erro: Número digitado igual ou menor a 1")
}