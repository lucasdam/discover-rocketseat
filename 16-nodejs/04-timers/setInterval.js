// setInterval roda uma função N vezes depois de x ms
const timeOut = 5000
const checking = () => console.log('checking!')

setInterval(checking, timeOut) /* checking para chamar a função, e timeOut é de quanto em quanto tempo ela será chamada */

/* ctrl+C para encerrar uma execução */