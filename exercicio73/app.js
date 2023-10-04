let num = parseInt(prompt("Digite um número"))

for ( let i = num - 1; i > 1; i-- ) {
    num = num * i; // num = 5 * 4 / num = 20 * 3 // num = 60 * 2 //  
}

console.log(num)