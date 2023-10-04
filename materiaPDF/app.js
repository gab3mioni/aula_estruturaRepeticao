// estruturas de repetição são construções que permitem um conjunto de instruções seja executada repetidamente enquanto uma condição específica
// for atendida. Essa condição de parada é verificada antes de cada execução do conjunto de instruções. Quando a condição não é mais verdadeira,
// para de executar. Elas são fundamentais para automatizar tarefas que precisam ser executadas várias vezes sem a necessidade de escrever o
// mesmo código repetidamente, criando programas mais eficientes e concisos 

// estrutura de repetição for

// for (inicialização; condição; incremento ou decremento) {
    // conjunto de instruções
// }

// Inicialização: onde é definido uma variável e atribui um valor inicial. é executada somente uma vez, no inicio do loop
// Condição: é uma expressão avaliada antes de cada iteração do loop. Se a condição for verdadeira, o conjunto de instruções dentro do loop será
// executada. Se for falsa, o loop será interrompido.
// Incremento ou decremento: é onde atualiza a variável definida na inicialização. Geralmente, envolve incrementar ou decrementar o valor da variável.
// É executada após cada iteração da estrutura

// exemplo for

for ( let i = 1; i <= 5; i++ ) { // variável i atribui valor 1, verifica se a variável é menor ou igual a 5, se for verdadeira, variável i é incrementada em 1
    console.log(i) // o resultado do loop será 1 2 3 4 5
}