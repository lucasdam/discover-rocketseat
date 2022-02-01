// node index, para executar no terminal (se atentar ao diretório)

const questions = [ /* Array de perguntas */
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?" 
]

const ask = ( index = 0 ) => { /* Printa a pergunta */
  process.stdout.write("\n" + questions[index] + " > ")
}

const answers = [] /* Array com as repostas que serão digitadas */

ask()

process.stdin.on("data", data => { /* Entrada da resposta do usuário. "on" funciona como um listener */
  answers.push(data.toString().trim()) /* Formata a resposta e insere no array */
  if(answers.length < questions.length) { /* Se a quantidade de respostas for menor que a quantidade de perguntas, chama a função de perguntar novamente, pois ainda há pergunta(s) a se fazer. Passando com index a quantidade que já tem de respostas */
    ask(answers.length)
  } else {
    console.log(answers) /* Se a quantidade de respostas se igualar com a quantidade de perguntas, printa as respostas que foram dadas */
    process.exit() /* E encerra o processo */
  }
})

process.on('exit', () => {
  console.log(`
    Massa Lucas Damasceno!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}
    
    O que te deixou feliz hoje foi:
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje!
    
    Volte amanhã para novas reflexões!
  `)
})