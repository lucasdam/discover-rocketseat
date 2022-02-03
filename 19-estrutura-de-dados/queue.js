/* Queue (fila)
    - Linear
    - O primeiro a entrar na fila é o primeiro a sair
    - FIFO (First In First Out)
        . O primeiro a entrar na fila, é o primeiro a sair dela
        . Front(frente): é a referência do primeiro elemento a entrar na fila
        . Back(fundo): é a referência do último elemento a entrar na fila

    - Métodos fundamentais:
        . enqueue(): adicionar um elemento ao final da fila
        . dequeue(): remover o primeiro elemento a entrar na fila

        . size(): mostrar o tamanho da fila
        . front(): pegar o primeiro elemento da fila, dentre tantos outros
*/

// Passo 1: Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) { // Elemento entra na fila
        this.data.push(item) // push() para inserir o item dentro do array
        console.log(`${item} ENTROU na fila!`)
    }

    dequeue() { // Elemento sai na fila
        const item = this.data.shift() // shift() para remover o elemento de índice 0 do array (diminui em 1 os índices dos demais valores do vetor)
        console.log(`${item} SAIU da fila!`)
    }

}

// Passo 2: Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')

fila.dequeue()
fila.dequeue()
fila.dequeue()