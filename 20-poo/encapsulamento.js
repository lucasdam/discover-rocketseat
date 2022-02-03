/* Encapsulamento
    - Colocar numa cápsula
    - Agrupamento de funções e variáveis
    - Esconder detalhes de implementação
    - Camada de segurança para os atributos e métodos
*/

/* // Estrutural
let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea() */


// Orientado a Objetos
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() { // por causa da #, essa função só é visível dentro dessa classe
        return this.altura * this.largura
    }

}

let poligono = new Poligono(50, 60)

console.log(poligono)
console.log(poligono.area)

/* console.log(poligono.#calcularArea()) // SyntaxError: Private field '#calcularArea' must be declared in an enclosing class */