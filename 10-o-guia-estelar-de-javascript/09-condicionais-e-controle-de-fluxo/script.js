/* if...else */

let temperature = 37.2
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (temperature >= 37)
    console.log('Febre')

if (temperature >= 37) {
      console.log('Febre')
   } else {
       console.log('Saudável')
   }

if (highTemperature) {
    console.log('Febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

/* switch */

function calculate(number1, operator, number2) {
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break 
    }

    return result
}

console.log(calculate(4, '*', 3)) 
console.log(calculate(5, '%', 2))

/* throw, try, catch */

// throw
function sayMyName (name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try... catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
}
console.log('Após a função de erro')


// Repetindo... mas passando um nome
try {
    sayMyName('Lucas')
} catch (e) {
    console.log(e)
}
console.log('Após o try/catch')