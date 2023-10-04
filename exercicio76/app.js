let count = 1;

while ( count <= 20) {

    let resultado = count % 2 == 0

    if ( resultado == true) {
        console.log(`${count} é Par`)
    } else {
        console.log(`${count} é ímpar`)
    }
    count++;
}