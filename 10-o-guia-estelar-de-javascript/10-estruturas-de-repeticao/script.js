/*  for 
        * break: para a execução do loop
        * continue: pula a execução do momento
*/

for (let i = 1; i <= 3; i++) {
    console.log(i)
}

console.log('-----------------------')

for (let a = 3; a >= 1; a--) {
    console.log(a)
}

console.log('-----------------------')

for (let b = 1; b <= 5; b++) {
    if (b === 3) { // vai parar quando chegar em 3
        break
    }

    console.log(b)
}

console.log('-----------------------')

for (let b = 1; b <= 5; b++) {
    if (b === 3) { // vai pular o 3
        continue
    }

    console.log(b)
}

console.log('-----------------------')

/*  while
        * usa quando não sabe o momento da parada
*/

let c = 0

while (c < 5) {
    console.log(c)
    c++
}

console.log('-----------------------')

/* for...of */

let name = 'Lucas'
let names = ['João', 'Paulo', 'Pedro']

for (let char of name) {
    console.log(char)
}

for (let name of names) {
    console.log(name)
}

console.log('-----------------------')

/* for...in */

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}