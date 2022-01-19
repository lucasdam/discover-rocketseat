var name // declaration
name = "Lucas" // assignment
console.log(typeof name) // tipo de dado
console.log(name)

let age, isHuman // agrupamento de declarações
age = 15
isHuman = true

console.log(name, age, isHuman) // múltiplos argumentos na função
console.log('O ' + name + ' tem ' + age + ' anos') // concatenando valores
console.log(`O ${name} tem ${age} anos`) // interpolando valores

// Object
const person = {
    name:'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person)
console.log(person.name)
console.log(`${person.name} tem ${person.age} anos.`)

// Array
const animals = ['Lion', 'Monkey', {name: 'Cat', age: 3}]

console.log(animals)
console.log(animals[0])
console.log(animals.length)
console.log(animals[2].name)