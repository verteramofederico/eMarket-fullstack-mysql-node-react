// express y el router
const express = require("express");
const router = express.Router();
const path = require('path');



// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

// traer el controller
const usersController = require("../controllers/usersControllers")

// define rutas
router.get("/login", usersController.login); 
router.get("/register", usersController.register);
router.post('/create', uploadFile.single("image"),validations, usersController.store);
router.post("/login", usersController.loginProcess); 
router.get("/profile/", usersController.profile);

// exporto
module.exports = router; 