/* 12 - Comandos nas tabelas */

/* create table */
CREATE TABLE alunos (
  matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  reponsavel TEXT
)

CREATE TABLE professores (
  id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  materia TEXT
)

CREATE TABLE aulas (
  id_professor INTEGER,
  matricula INTEGER,
  FOREIGN KEY (id_professor) REFERENCES professores (id_professor),
  FOREIGN KEY (matricula) REFERENCES alunos (matricula)
)

/* alter table */
ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professor RENAME TO professores

ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula

/* drop table */
DROP TABLE alunos

DROP TABLE aulas

DROP TABLE professores