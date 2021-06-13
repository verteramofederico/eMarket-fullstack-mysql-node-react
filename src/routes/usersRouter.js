// express y el router
const express = require("express");
const router = express.Router();

// traer el controller
const usersController = require("../controllers/usersControllers")

// define rutas
router.get("/login", usersController.login);
router.get("/register", usersController.register);

// exporto
module.exports = router; 