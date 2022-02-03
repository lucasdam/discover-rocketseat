/* 11 - Comandos Avançados */

/* order by */
select * from professor
order by nome

select * from aluno
order by responsavel desc

/* limit */
select * from aluno
limit 2

/* offset, ignora os (2) primeiros registros */
select * from funcionarios
limit 4 offset 2

/* count */
select count(*) from funcionarios

/* group by */
select id_departamento, count(id_departamento) from funcionarios
group by id_departamento

/* join, group by e count juntos */
select departamentos.descricao, count(funcionarios.id_departamento) from funcionarios
join departamentos on funcionarios.id_departamento = departamentos.id_dept
group by departamentos.id_dept

/* having */
select departamentos.descricao, count(funcionarios.id_departamento) from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept
group by departamentos.id_dept
having count(funcionarios.id_departamento) >= 2 
/* having ... in (2, 4)	 */