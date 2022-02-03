/* 5 - Comando SELECT */

/* SELECT */
select * from aluno

select * from professor

select * from aulas

/* SELECT especificando campos */
select nome, responsavel from aluno

select nome, materia, cpf from professor

/* SELECT com WHERE */
select * from aluno
where matricula = 1

select * from aluno
where nome like 'j%'

select * from aluno
where nome like '%g%'

select matricula, cpf from aluno
where nome like '%G%'
