var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //res.render("index", { title: "You Can!!" });
  res.send("prueba sin motor de busqueda");
});

module.exports = router;
