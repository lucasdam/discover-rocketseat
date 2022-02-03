/* Herança
    - Pais e filhos
    - Objetos podem herdar, ou estender, características bases
    - Uma cópia de atributos e métodos de outra classe
*/

class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() // Puxa métodos e atributos do pai
        this.rodas = 2
    }
}