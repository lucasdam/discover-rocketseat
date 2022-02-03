/* Abstração
    Template ou identidade de uma classe que será construída no futuro
    
    - Atributos e métodos podem ser criados na classe de Abstração (Superclasse), MAS
    - A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração
*/

// Definir
class Parafuso {
    constructor() { // Superclasse - Abstrata
        if (this.constructor === Parafuso) 
            throw new Error('Classe abstrata não pode ser instanciada')
    }

    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {} // Não tem nada implementado nessa classe

// Criar e Usar
/* new Parafuso() // Error: Classe abstrata não pode ser instanciada */
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)

/* console.log(allen.tipo) // throw new Error('Método "get tipo()" precisa ser implementado') */