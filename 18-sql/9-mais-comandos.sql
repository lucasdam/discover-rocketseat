/* 9 - Mais Comandos */
select * from aluno

/* insert, não precisa adicionar 'matricula' (primary key) pois esse campo possui auto incremento */
insert into aluno (nome, cpf, responsavel) values ('Maria Luíza', 45678912345, 'Wantuil Soares')

/* update */
update aluno set nome='Mariano Soares', responsavel='Marcio Soares' where matricula = 2

/* delete */
delete from aluno where matricula = 3