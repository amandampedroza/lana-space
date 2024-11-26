var express = require("express");
var router = express.Router();


var dashboardController = require("../controllers/dashboardController");

router.get("/listar", function (req, res) {
   dashboardController.listar(req, res);
  });

  router.get("/albumFavorito", function (req, res) {
    dashboardController.albumFavorito(req, res);
   });

   router.get("/albumNFavorito", function (req, res) {
    dashboardController.albumNFavorito(req, res);
   });


   router.get("/buscarAlbum", function (req, res) {
    dashboardController.buscarAlbum(req, res);
   });

   router.get("/buscarIdade", function (req, res) {
    dashboardController.buscarIdade(req, res);
   });

module.exports = router;