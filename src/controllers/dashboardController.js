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
          console.log('Erro ao atualizar lote', error.sqlMessage)
          res.status(500).json(error.sqlMessage)
      })
}
  
  
  
module.exports = {listar, albumFavorito}