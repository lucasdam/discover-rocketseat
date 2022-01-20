/*  SISTEMA DE GASTOS FAMILIAR
        * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
            receitas: []
            despesas: []
        * Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
    incomes: [800, 60.5, 150, 378.9],
    expenses: [50, 90, 72.5, 260, 500, 120, 33]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2).replace(".", ",")}`)
}

calculateBalance()