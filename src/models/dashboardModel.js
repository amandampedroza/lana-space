var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT TRUNCATE(AVG(TIMESTAMPDIFF(YEAR,dataNascimento, NOW())),1) as Média FROM usuario;`
    return database.executar(instrucaoSql);
}

function albumFavorito(){
    var instrucaoSql = `select albumFavorito as AlbumFav, COUNT(*) AS quantidade FROM respostas GROUP BY albumFavorito ORDER BY quantidade DESC LIMIT 1;`
    return database.executar(instrucaoSql);
}

function albumNFavorito(){
    var instrucaoSql = `SELECT  albumFavorito as AlbumNFav, COUNT(*) AS quantidade FROM respostas GROUP BY albumFavorito ORDER BY quantidade ASC LIMIT 1;`
    return database.executar(instrucaoSql)
}   

function buscarAlbum(){
    var instrucaoSql = `select albumFavorito as Nome, count(albumFavorito) as Albuns from respostas group by albumFavorito;`
    return database.executar(instrucaoSql);
}

function buscarIdade(){
    var instrucaoSql = `SELECT TIMESTAMPDIFF(YEAR, dataNascimento, NOW()) AS idade, COUNT(*) AS quantidade FROM usuario GROUP BY idade ORDER BY idade;`
    return database.executar(instrucaoSql);
}

module.exports = {listar, albumFavorito, buscarAlbum, buscarIdade, albumNFavorito};