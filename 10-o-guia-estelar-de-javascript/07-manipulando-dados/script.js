/*  Prototype
        * prototype-base language
        * prototype chain
        * __proto__
*/
console.log("Lucas".length)
console.log((10/3).toFixed(2))

/*  Type conversion (typecasting) vs Type coersion
        * Alteração de um tipo de dado para outro tipo
*/
console.log('9' + 5) // Coersion. JS transformou o 5 em string. Concatenou
console.log(Number('9') + 5) // Conversion. Eu converti a string para number. Somou

// Manipulação de String em Número (vice-versa)
let string = '123'
console.log(Number(string), typeof(Number(string)))
let number = 321
console.log(String(number), typeof(String(number)))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = 'Paralelepipedo'
console.log(word.length)
let num = 1234
console.log(String(num).length)

// Transformar um número quebrado com 2 casas decimais e trocar por ponto e vírgula
let numero = 345.33452345
console.log(numero.toFixed(2).replace(".", ",")) // Virou String. Não é possível deixar como Number por causa da vírgula

//Transforme letras minúsculas em maiúsculas. Faça o contrário também
let palavra = "Programar É Muito Bacana!"
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())

// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um  texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

// Verificar se o texto contém a palavra Amor
let frase = "Eu não quero viver o amor!"
console.log(frase.includes("Amor")) // false. case sensitive
console.log(frase.includes("amor")) // true

// Criar Array com construtor
let array = new Array('a', 'b', 'c')
console.log(array)

// Contar elementos de um array
console.log(["a", "b", "c"].length)

console.log([
    "a",
    {type: "array"},
    function() {return "alo"}
][2]())

// Transformar uma cadeia de caracteres em elementos de um array
let word2 = "manipulação"
console.log(Array.from(word2))


/* MANIPULANDO ARRAYS */
let techs = ["html", "css", "js"]
console.log(techs)

// Adicionar um item no fim
techs.push("nodejs")
console.log(techs)
// Adicionar um item no começo
techs.unshift("sql")
console.log(techs)
// Remover elemento do fim
techs.pop()
console.log(techs)
// Remover elemento do começo
techs.shift()
console.log(techs)
// Pegar somente alguns elementos do array. "Corta um pedaço" do índice 1 ao 3
console.log(techs.slice(1, 3))
// Remover 1 ou mais itens em qualquer posição do array. Primeiro informa o índice do array, e no segundo argumento, quantos elementos quer remover
techs.splice(1, 2)
console.log(techs)
// Encontrar a posição de um elemento no array
let index = techs.indexOf("html")
console.log(index)