// fuente de datos
const path = require("path")
const router = require("../routes/usersRouter")
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

// objeto literal con acciones para cada ruta

const userModel = require("../models/users");
const session = require("express-session");

const usersController = {
    login: (req,res) =>
        res.render("users/login"),
    loginProcess: (req, res) => {
        let userToLogin = userModel.findByField("email", req.body.usuario);
        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password )
            if (passwordOk) {
                delete userToLogin.password
                req.session.userLogged = userToLogin
                return res.redirect("/user/profile")
            }
            return res.render("users/login", {
                errors: {
                    usuario: {
                        msg: "Las credenciales son invalidas"
                    }
                }
            })
    
        }
        return res.render("users/login", {
            errors: {
                usuario: {
                    msg: "Usuario no encontrado. Por favor vuelva a intentarlo o registrese."
                }
            }
        })
    },
    register: (req, res) => res.render("users/register"),

    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render ("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            } );
        }
        // ver si el usuario ya existe. Desactivado por comodidad
        /* let userInDB = userModel.findByField("usuario", req.body.usuario);
            if (userInDB) {
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            } */

        // junto datos del usuario a crear    
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename
        }

        let userCreated = userModel.create(userToCreate);
        return res.redirect("/user/login") 
    },
    profile: (req, res) => {
        return res.render("users/userProfile", {
            user: req.session.userLogged
        })
    }
    }


// exportamos el resultado
module.exports = usersController