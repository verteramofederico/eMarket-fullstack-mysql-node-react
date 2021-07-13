// fuente de datos
const path = require("path")
const router = require("../routes/usersRouter")
/* const bcryptjs = require('bcryptjs'); */
const { validationResult } = require('express-validator');

// objeto literal con acciones para cada ruta

const userModel = require("../models/users");

const usersController = {
    login: (req, res) => res.render("users/login"),
    register: (req, res) => res.render("users/register"),
    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render ("users/login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            } );
        };

        let result = userModel.create(req.body,req.file);
        return result == true ? res.redirect("/user/login") : res.send("Error al cargar la informacion") 
    }
    }


// exportamos el resultado
module.exports = usersController