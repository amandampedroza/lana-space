create database LanaSpace;

use LanaSpace;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(255),
senha varchar(40)
);

create table respostas (
albumFavorito varchar(45),
musicaFavorita varchar(45),
dtNascimento date,
fkUsuario int,
constraint fkUsuarioRespostas foreign key (fkUsuario) references usuario(idUsuario)
);




select * from usuario;