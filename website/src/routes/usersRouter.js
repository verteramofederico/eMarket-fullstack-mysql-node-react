// express y el router
const express = require("express");
const router = express.Router();
const path = require('path');



// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// traer el controller
const usersController = require("../controllers/usersControllers")

// define rutas
router.get("/login", guestMiddleware, usersController.login); 
router.get("/register", guestMiddleware, usersController.register);
router.post('/create', uploadFile.single("image"),validations, usersController.store);
router.post("/login", usersController.loginProcess); 
router.get("/profile/", authMiddleware, usersController.profile);
router.get('/logout/', usersController.logout);

// exporto
module.exports = router; 