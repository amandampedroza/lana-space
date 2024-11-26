var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT TRUNCATE(AVG(TIMESTAMPDIFF(YEAR,dataNascimento, NOW())),1) as Média FROM usuario;`
    return database.executar(instrucaoSql);
}

function albumFavorito(){
    var instrucaoSql = `select max(albumFavorito) as 'AlbumFav', min(albumFavorito) as 'AlbumNFav' from respostas;`
    return database.executar(instrucaoSql);
}

function buscarAlbum(){
    var instrucaoSql = `select albumFavorito as Nome, count(albumFavorito) as Albuns from respostas group by albumFavorito;`
    return database.executar(instrucaoSql);
}

function buscarIdade(){
    var instrucaoSql = `select idUsuario as Usuario, (timestampdiff(year,dataNascimento, now())) as idade from usuario;`
    return database.executar(instrucaoSql);
}

module.exports = {listar, albumFavorito, buscarAlbum, buscarIdade};