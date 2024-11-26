var dashboardModel = require("../models/dashboardModel");

function listar(req, res) {
   dashboardModel.listar().then((resultado) => {
      res.status(200).json(resultado);
    })
    
    .catch(function (error) {
        console.log(error)
        console.log('Erro ao atualizar lote', error.sqlMessage)
        res.status(500).json(error.sqlMessage)
    })
}

function albumFavorito(req, res) {
    dashboardModel.albumFavorito().then((resultado) => {
        res.status(200).json(resultado);
      })
      
      .catch(function (error) {
          console.log(error)
          console.log('Erro ao atualizar álbum favorito', error.sqlMessage)
          res.status(500).json(error.sqlMessage)
      })
}

function albumNFavorito(req, res) {
    dashboardModel.albumNFavorito().then((resultado) => {
        res.status(200).json(resultado);
      })
      
      .catch(function (error) {
          console.log(error)
          console.log('Erro ao atualizar álbum menos favorito', error.sqlMessage)
          res.status(500).json(error.sqlMessage)
      })
}


function buscarAlbum(req, res) {
    dashboardModel.buscarAlbum().then((resultado) => {
        res.status(200).json(resultado);
      })
      
      .catch(function (error) {
          console.log(error)
          console.log('Erro ao atualizar lote', error.sqlMessage)
          res.status(500).json(error.sqlMessage)
      })
}

function buscarIdade(req, res) {
    dashboardModel.buscarIdade().then((resultado) => {
        res.status(200).json(resultado);
      })
      
      .catch(function (error) {
          console.log(error)
          console.log('Erro ao atualizar lote', error.sqlMessage)
          res.status(500).json(error.sqlMessage)
      })
}
  
  
  
module.exports = {listar, albumFavorito, buscarAlbum, buscarIdade, albumNFavorito}