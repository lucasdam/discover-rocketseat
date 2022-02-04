/* Imutabilidade
    - Uma variável não vai variar
    - Se você precisar mudar uma variável, você não muda, você cria uma nova (constante)
*/

/* Exemplo em JS */
const cart = {
    quantity: 2,
    total: 200
}

// Bad
cart.quantity = 3

// Good
const newCart = {...cart, quantity: 3} // ...cart (espalhar, pegar tudo o que tem em cart, mas mudando o quantity)

/* 
// Exemplo em ReactJS
const [amount, setAmount] useState(0)

// Bad (nem é possível, na verdade)
amount = 2

// Good
setAmount(2) 
*/