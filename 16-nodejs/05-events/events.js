const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
  console.log(message)
})

ev.emit('saySomething', "Mensagem by Lucas Damasceno")

ev.once('saySomethingOnce', (message) => {
  console.log(message)
})

ev.emit('saySomethingOnce', "Mensagem by Lucas")
ev.emit('saySomethingOnce', "Mensagem by Damasceno")