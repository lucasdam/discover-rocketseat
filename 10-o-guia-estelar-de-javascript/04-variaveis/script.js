// JS é fracamente tipado, é dinâmico. Não precisa definir o tipo da variável.

// var, let, const
let clima = "Quente"
clima = "Frio"
console.log(clima)
const temperatura = 10
console.log(temperatura)

// HOISTING: deslocamento da declaração de todas as variáveis e funções para o topo do código.

// Scopo determina a visibilidade de alguma variável no JS. var é global e local. let e const são locais, só funcionam no scopo onde foram criadas.
{
    console.log(x)
    var x = 0
    console.log(x)
}
console.log(x)

{
    let y = 1
    console.log(y)
}
// console.log(y) -> error

let z = 10
{
    console.log(z)
    z = 5 // Alterou o valor da variável global. Não alteraria se usasse const
    console.log(z)
}
console.log(z)


/*
Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: 
JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. 

Em um nome de variável em JS você pode: 
Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. 

Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.
*/