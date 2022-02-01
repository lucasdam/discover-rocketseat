// clearInterval cancela um setInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
setTimeout(() => clearInterval(interval), 3000) /* Depois de 3 segundos vai chamar o clearInterval que irá cancelar o setInterval que fica dando checking a cada segundo */