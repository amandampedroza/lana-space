var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var album = req.body.albumServer
  var fkUsuario = req.body.fkUsuarioServer
  
      empresaModel.cadastrar(album, fkUsuario).then((resultado) => {
        res.status(201).json(resultado);
      })
    };
  


module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
