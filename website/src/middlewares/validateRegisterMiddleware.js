const path = require('path');
const { body } = require('express-validator');

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;


module.exports = [
    body("nombre").notEmpty().withMessage("Debes ingresar un nombre").bail()
    .isLength({ min: 2 }).withMessage("Debes ingresar un nombre de al menos 2 caracteres"),
    body("email").notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes escribir un formato de correo valido")
    .custom(value => {
        return db.User.findOne({ where: { email: value} })
        .then(user => {
            if (user) {
                return Promise.reject('E-mail en uso');
                }
                })
            }).withMessage("Email en uso"),
    body("domicilio").notEmpty().withMessage("Debes ingresar un domicilio"),
    body("password").notEmpty().withMessage("Debes ingresar un password").bail()
    .isLength({ min: 6 }).withMessage("Password de minimo 6 caracteres").bail()
    //.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Debe contener mayus, minus y caracter especial")
    ,
    body("image").custom((value, { req }) => {
        let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg', ".gif"];
	
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