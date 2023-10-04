let positivo = 0;
let negativo = 0;

for( let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Digite um número"))
    if ( number > 0 ) {
        positivo++;
    } else if ( number < 0) {
        negativo++;
    } else {
        alert("Digite um número diferente de zero.")
    }
}

console.log(positivo)
console.log(negativo)