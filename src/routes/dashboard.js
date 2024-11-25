var express = require("express");
var router = express.Router();


var dashboardController = require("../controllers/dashboardController");

router.get("/listar", function (req, res) {
   dashboardController.listar(req, res);
  });

  router.get("/albumFavorito", function (req, res) {
    dashboardController.albumFavorito(req, res);
   });


module.exports = router;