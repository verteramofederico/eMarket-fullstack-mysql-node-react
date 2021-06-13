// express y el router
const express = require("express");
const router = express.Router();

// traer el controller
const mainController = require("../controllers/mainController")

// define rutas
router.get("/", mainController.home);
router.get("/nosotros", mainController.nosotros);

// exporto
module.exports = router; 