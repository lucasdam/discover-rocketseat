// setTimeout roda uma função depois de x milissegundos
const timeOut = 3000 /* Guarda em memória */
const finished = () => console.log('Mostrando isso só depois dos 3 segundos do timeout') /* Guarda em memória */

setTimeout(finished, timeOut) /* Callback -> será chamada de volta depois de 3 segundos, mas deixa o programa liberado para executar o que tem pela frente, pra não ficarem esperando */
console.log('Mostrando isso na hora') /* Já mostra em tela na hora */