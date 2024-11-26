var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT TRUNCATE(AVG(TIMESTAMPDIFF(YEAR,dataNascimento, NOW())),1) as Média FROM usuario;`
    return database.executar(instrucaoSql);
}

function albumFavorito(){
    var instrucaoSql = `select max(albumFavorito) as 'AlbumFav', min(albumFavorito) as 'AlbumNFav' from respostas;`
    return database.executar(instrucaoSql);
}

module.exports = {listar, albumFavorito};