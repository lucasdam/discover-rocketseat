const { EventEmitter } = require('events')
const ev = new EventEmitter() /* EventEmitter é uma função do estilo classe */

ev.on('saySomething', (message) => {
  console.log(message)
})

ev.emit('saySomething', "Mensagem by Lucas Damasceno") /* Emite um evento. Mas precisa ter, em algum lugar do código, o "on" para alguém ficar ouvindo */

ev.once('saySomethingOnce', (message) => { /* "once" vai ouvir apenas 1 vez */
  console.log(message)
})

ev.emit('saySomethingOnce', "Mensagem by Lucas")
ev.emit('saySomethingOnce', "Mensagem by Damasceno")