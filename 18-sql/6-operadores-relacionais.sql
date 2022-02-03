/* 6 - Operadores Relacionais */

/* =, igual */
select * from aluno
where cpf = 45678945645

select * from aluno
where matricula = 3

/* like */
select * from aluno
where nome like 'jakeliny gracielly'

select * from aluno
where responsavel like 'josefina%'

select * from aluno
where responsavel like 'M%'

/* >, maior que */
select * from aluno
where matricula > 2

/* <, menor que */
select * from aluno
where matricula < 2

/* >=, maior ou igual */
select * from aluno
where matricula >= 2

/* <=, menor ou igual */
select * from aluno
where matricula <= 2

/* <>, não igual a */
select * from aluno
where matricula <> 1

/* !=, diferente de */
select * from aluno
where matricula != 3