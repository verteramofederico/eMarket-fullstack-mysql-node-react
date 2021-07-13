// express y el router
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Middlewares


const { body } = require("express-validator")

/* const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware'); */

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") || extension.indexOf("jpeg") || extension.indexOf("png") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","users"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});

const validations = [
    body("nombre").notEmpty().withMessage("Debes ingresar un nombre"),
    body("usuario").notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes escribir un formato de correo valido"),
    body("domicilio").notEmpty().withMessage("Debes ingresar un domicilio"),
    body("intereses").notEmpty().withMessage("Debes ingresar un interes"),
    body("password").notEmpty().withMessage("Debes ingresar un password"),
    body("image").custom((value, { req }) => {
        let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
	
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
        return true;
    })
]

// traer el controller
const usersController = require("../controllers/usersControllers")

// define rutas
router.get("/login", usersController.login); 
router.get("/register", usersController.register);
router.post('/create', [upload.single("image")],validations, usersController.store);

// exporto
module.exports = router; 