const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body("name").notEmpty().withMessage("Debes ingresar un nombre").bail()
    .isLength({ min: 5 }).withMessage("Debes ingresar un nombre de al menos 5 caracteres"),
    body("description").notEmpty().withMessage("Debes ingresar una descripcion").bail()
    .isLength({ min: 15 }).withMessage("Debes ingresar una descripcion de al menos 15 caracteres"),
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