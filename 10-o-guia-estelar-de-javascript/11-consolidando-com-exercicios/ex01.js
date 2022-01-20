/*  TRANSFORMAR NOTAS ESCOLARES
        Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres A B C

        * de 90 para cima   ->  A
        * entre 80 - 89     ->  B
        * entre 70 - 79     ->  C
        * entre 60 - 69     ->  D
        * menor que 60      ->  F
*/

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80
    let scoreC = score >= 70
    let scoreD = score >= 60
    let scoreF = score < 60

    let scoreFinal

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Nota inválida'
    }

    return scoreFinal
}

console.log(getScore(100))
console.log(getScore(85))
console.log(getScore(70))
console.log(getScore(62))
console.log(getScore(50))
console.log(getScore())