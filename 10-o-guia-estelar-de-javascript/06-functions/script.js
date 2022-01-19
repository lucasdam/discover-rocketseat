// Functions (agrupamento, significado e reutilização de código)

// function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

// execute, run, call
createPhrases()

// function expression, function anonymous
const sub = function(){}

// parameters
const sum = function(number1, number2) {
    console.log(number1 + number2)
}
sum(2, 3) // arguments

// return
const mult = function(number1, number2) {
    let total = number1 * number2
    return total
}
let number1 = 5
let number2 = 10
console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A multiplicação é ${mult(number1, number2)}`)

// function scope
let subject = 'create video'
function createThink() {
    subject = 'study'
}
console.log(subject)
console.log(createThink(subject))
console.log(subject)

// function hoisting
sayMyName()
function sayMyName() {
    console.log('Lucas')
}

/* Reference Error
sayMyLastName()
var sayMyLastName = function() {
    console.log('Damasceno')
}
*/

// arrow function
const sayMyMiddleName = (name) => {
    console.log(name)
}
sayMyMiddleName('Souza')

// callback function
function sayMyLastName(name) {
    console.log('Antes de executar a função Callback')
    name()
    console.log('Depois de executar a Callback')
}
sayMyLastName(
    () => {
        console.log('Estou em uma Callback')
    }
)

/*
    function sayMyLastName() {
        console.log('Antes de executar a função Callback')
        
        function name() {
            console.log('Estou em uma Callback')
        }

        console.log('Depois de executar a Callback')
    }

    sayMyLastName()
*/

   
// Function() constructor

/*
    * expressão new
    * criar um novo objeto
    * this keyword
    * boa prática a inicial ser maiúscula (ex.: Person)
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " andando..."
    }
}

const lucas = new Person("Lucas") // instanciando um objeto
const joao = new Person("João")
console.log(lucas)
console.log(joao.walk())