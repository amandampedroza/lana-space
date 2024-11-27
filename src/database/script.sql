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

select truncate(avg(timestampdiff(year,dataNascimento, now())),1) as Média from usuario;

SELECT TRUNCATE(AVG(TIMESTAMPDIFF(YEAR,dataNascimento, NOW())),1) FROM usuario;


select max(albumFavorito) as 'AlbumFav' from respostas;

select min(albumFavorito) as 'AlbumFav' from respostas;

select  albumFavorito as Nome, count(albumFavorito) as Albuns from respostas group by albumFavorito;

select count(timestampdiff(year,dataNascimento, now())) as idade from usuario group by dataNascimento;

SELECT TIMESTAMPDIFF(YEAR, dataNascimento, NOW()) AS idade, COUNT(*) AS quantidade FROM usuario GROUP BY idade ORDER BY idade;

SELECT  albumFavorito as AlbumNFav, COUNT(*) AS quantidade FROM respostas GROUP BY albumFavorito ORDER BY quantidade ASC LIMIT 1;

select count(fkUsuario) as quantidade from respostas;

select * from respostas;

select * from usuario
where nome like '%m____';