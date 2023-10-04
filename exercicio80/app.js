let nome = prompt("Digite seu nome");

console.log(nome)

for ( let i = 0; i < 2; i++) {
    let nota = parseFloat(prompt("Digite sua nota"));

    if ( nota > 10 ) {
        console.log("ERRO: A nota digitada não pode ser maior que dez.")
    } else if ( nota < 0 ) {
        console.log("ERRO: A nota digitada não pode ser menor que zero")
    } else if ( nota >= 7 ) {
        console.log("Aprovado")
    } else if ( nota <= 5 ) {
        console.log("Retido")
    } else if ( nota > 5 || nota < 7) {
        console.log("Recuperação")
    }
}