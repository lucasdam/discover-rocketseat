const express = require('express'); /* Express irá renderizar no navegador o que foi criado */
const app = express(); /* Instanciando o express e guardando em app */

app.set("view engine", "ejs"); /* Usar o ejs para a view engine (ferramenta usada para renderizar html) */

app.get("/", function(req, res) { /* app.get para criar a rota */
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    }); /* O que será dado de resposta. Está sendo passado um arquivo index.ejs e um objeto */
})

/* O express já entende que os arquivos ejs precisam estar dentro da pasta views */

app.get("/sobre", function(req, res) { /* request e response */
    res.render("pages/about");
})

app.listen(8080); /* O app carrega tudo do express. listen função do express para ficar ouvindo */
console.log("Rodando"); /* node server, para rodar */