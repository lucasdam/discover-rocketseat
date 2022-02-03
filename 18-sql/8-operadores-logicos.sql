/* 8 - Operadores Lógicos */

/* and */
select * from aluno
where nome like 'J%' and matricula < 2

/* or */
select * from aluno
where matricula > 3 or nome like 'm%'

/* between */
select * from funcionarios
where id_funcionario between 4 and 7

select * from funcionarios
where id_funcionario not between 4 and 7

/* in e not in */
select * from funcionarios
where id_departamento in (1, 2, 5)

select * from funcionarios
where id_departamento not in (1, 2, 5)

/* is null e is not null */
select * from funcionarios
where id_departamento is null

select * from funcionarios
where id_departamento is not null