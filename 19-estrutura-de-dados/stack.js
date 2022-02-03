/* Stack (pilha)
    - Linear, um após o outro
    - O último a entrar na pilha é o primeiro a sair
    - LIFO (Last In First Out)
        . O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair

    - Métodos fundamentais:
        . push(): adicionar um elemento à pilha
        . pop(): remover o elemento do topo da pilha
        . peek(): obter o elemento do topo da pilha
        
        . size(): mostrar o tamanho da pilha
*/

// Passo 1: Modelagem
class Stack {
    constructor() { // Função executada quando o objeto for criado
        this.data = []
        this.top = -1
    } // this é a referência do objeto que será criado

    push(value) { // Recebe o valor que será adicionado no array
        this.top++ // Incrementa o this.top
        this.data[this.top] = value // this.top está com valor 0, então dentro do array, na posição 0, será adicionado o valor
        return this.data // Retorna a estrutura de array
    }

    pop() { 
        if (this.top < 0) return undefined // Se o topo for menor que 0, returna undefined
        const poppedTop = this.data[this.top] // Coloca o elemento do topo, último adicionado, dentro de poppedTop
        delete this.data[this.top] // Apaga o elemento que está no topo da pilha
        this.top-- // Decrementa o top para dizer que agora tem um elemento a menos
        return poppedTop // Retorna qual foi esse elemento removido (caso precise dessa informação em outro momento)
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined // Se o this.top foir maior ou igual a 0, retorna o elemento que está no topo
    }

}

// Passo 2: Utilizando
const stack = new Stack() // Instancia um novo objeto do tipo Stack

// Adicionando dados
stack.push('learning')
stack.push('data')
stack.push('structures')

console.log(stack.data)

// Obtendo o elemento do topo
console.log(stack.peek())

// Removendo dado
stack.pop()
console.log(stack.pop())