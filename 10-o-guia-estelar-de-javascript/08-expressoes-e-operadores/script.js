/*  Expressões e Operadores
        * Expressions
        * Operators
            - Binary
            - Unary
            - Ternary
 */

(function() { // função auto executável
    console.log('alo')
})()

let number = 1
console.log(number + 1) // operador binário
console.log(++number) // operador unário
console.log(true ? 'yes' : 'no') // operador ternario
console.log (false ? 'sim' : 'nao')

/*  new
        * left-hand-side expression
        * criar um novo objeto
*/

let name = new String('Lucas')
name.surName = 'Damasceno'
let age = new Number(20)
console.log(name.surName, age)

let date = new Date('2022-01-20')
console.log(date)

/*  Operadores unários
        * typeof
        * delete
*/

console.log(typeof "Lucas")

const person = {
    name: 'Lucas',
    age: 20
}
console.log(person)
delete person.age
console.log(person)

/* Operadores Aritméticos */

// Multiplicação
console.log(3.2 * 5)
// Divisão
console.log(12 / 2)
// Soma
console.log(10 + 10)
// Subtração
console.log(30 - 12)
// Resto da divisão
let remainder
remainder = 11 % 9
console.log(remainder)
// Incremento
let increment = 0
increment++
console.log(increment)
console.log(increment++)
// Decremento
let decrement = 0
console.log(decrement--)
console.log(decrement)
// Exponencial
console.log(3 ** 3)

/* Grouping operator ( ) */
let total = 2 + 3 * 5
console.log(total) // 17
let total2 = (2 + 3) * 5
console.log(total2) // 25

/* Operadores de comparação */
// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

//  ==  igual a
console.log(two == 1) // false
console.log(one == "1") // true

//  !=  diferente de
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

//  === estritamente igual a (compara o valor e o tipo)
console.log(one === "1") // false
console.log(one === 1) // true

//  !== estritamente diferente de
console.log(two !== "2") // true
console.log(two !== 2) // false

//  >   Maior que
console.log(one > two) // false

//  >=  Maior igual a
console.log(one >= 1) // true
console.log(two >= 1) // true

//  <   Menor que
console.log(one < two) // true

//  <=  Menor igual a
console.log(one <= two) // true
console.log(one <= 1) // true
console.log(one <= 0) // false

/* Operadores de atribuição */
let x
console.log(x)

// assignment
x = 1
console.log(x)
// addition assignment (x = x + 2)
x += 2
console.log(x)
// subtraction assignment
x -= 1
console.log(x)
// multiplacation assignment
x *= 2
console.log(x)
// division assignment
x /= 2
console.log(x)
// remainder
x %= 2
console.log(x)
// exponetiation
x **= 2
console.log(x)

/*  Logical operators 
        2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

        * AND &&
        * OR ||
        * NOT !
*/

/*  Operador Condicional (Ternário)
        * Dependendo da condição, nós receberemos valores diferentes
        * Condição então valor 1 se não valor 2
        * condition ? valuee1 : value2
*/

let pao = true
let queijo = true
const niceBreakfast = pao && queijo ? 'Café topper' : 'Café ruim'
console.log(niceBreakfast)

let idade = 16
const canDrive = idade >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive)

/*  String operator 
        * concatenation
        * Retorna a união de duas ou mais Strings
*/

let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
console.log(alpha + 1)

/*  FALSY
        Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
            * false
            * 0
            * -0
            * ""
            * null
            * undefined
            * NaN
*/

console.log(0 ? 'verdadeiro' : 'falso')

/*  TRUTHY
        Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
            * true
            * {}
            * []
            * 1
            * 3.23
            * "0"
            * "false"
            * -1
            * Infinity
            * -Infinity
*/

console.log([] ? 'verdadeiro' : 'falso') // true
console.log([] == true ? 'verdadeiro' : 'falso') // false

/*  Operator precedence
        * grouping                      ( )
        * negação e incremento          ! ++ --
        * multiplicação e divisão       * /
        * adição e subtração            + -
        * relacional                    < <= > >=
        * igualdade                     == != === !==
        * AND                           &&
        * OR                            ||
        * condicional                   ?:
        * assignment (atribuição)       = += -+ *=
*/

console.log((2 + 5) * 10)
console.log(3 > 2 > 1) // false
console.log(3 > 2 >= 1) // true, pois 3 > 2 dá true, que é igual a 1