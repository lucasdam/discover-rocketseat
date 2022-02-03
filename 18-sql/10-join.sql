/* 10 - Unindo tabelas */
select * from funcionarios
select * from departamentos

/* join */
select * from funcionarios
join departamentos
on departamentos.id_dept = funcionarios.id_departamento

/* join com where */
select * from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept
where funcionarios.id_departamento = 2

/* join especificando campos */
select funcionarios.nome,  funcionarios.cpf, departamentos.descricao
from funcionarios
join departamentos
on funcionarios.id_departamento = departamentos.id_dept

/* alias */
select fu.nome as 'Nome do Funcionário',  fu.cpf as 'CPF', de.descricao as 'Departamento'
from funcionarios as fu
join departamentos as de
on fu.id_departamento = de.id_dept

/* left outer join */
select * from funcionarios
left join departamentos
on funcionarios.id_departamento = departamentos.id_dept
/* Mostrou todo o conteúdo da tabela funcionarios, mesmo não tendo relacionamento com departamentos */

select * from departamentos
left join funcionarios
on funcionarios.id_departamento = departamentos.id_dept
/* Mostrou todo o conteúdo da tabela departamentos, mesmo não tendo relacionamento com funcionarios */

/* left join prioriza a tabela da esquerda (do from) */