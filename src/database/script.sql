create database LanaSpace;
drop database LanaSpace;
use LanaSpace;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(255),
senha varchar(40),
dataNascimento date
);

create table respostas (
idResposta int primary key auto_increment,
albumFavorito varchar(45),
fkUsuario int,
constraint fkUsuarioRespostas foreign key (fkUsuario) references usuario(idUsuario)
);


select * from respostas;

select * from usuario
where nome like '%m____';