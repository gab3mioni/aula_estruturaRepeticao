let number = parseInt(prompt("Digite um número"))

let raizquad = Math.sqrt(number)
let quad = Math.pow(number,2)

if ( number > 0 ) { 
    alert(`O número digitado é ${number} e sua raiz quadrada é ${raizquad}`)
} else if ( number < 0 ) {
    alert(`O número digitado é ${number} e ao quadrado é ${quad}`)
} else {
    alert("ERRO: O número digitado não pode ser igual a zero")
}