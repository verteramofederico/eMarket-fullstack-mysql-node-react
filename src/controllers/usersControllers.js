// fuente de datos
const path = require("path")
const router = require("../routes/usersRouter")
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

//Json modelos
const userModel = require("../trash/models/users");
const session = require("express-session");

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const { like } = Op

const usersController = {
    login: (req,res) =>
        res.render("users/login"),
    loginProcess: (req, res) => {
        //Json //userModel.findByField("email", req.body.usuario);

        db.User.findOne({ where: { email: req.body.usuario } })        
        .then ((userToLogin) => { 
                if (userToLogin) {
                    let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password )
                    if (passwordOk) 
                        { delete userToLogin.password
                        req.session.userLogged = userToLogin;

                        if(req.body.recordar) {
                            res.cookie("user", req.body.usuario, {maxAge: 1000 * 60 * 2})
                        } 

                        return res.redirect("/user/profile")
                        }  }
                else return res.render("users/login", { 
                    errors: { usuario: {msg: "Las credenciales son invalidas"}}} 
                    
                    )   })  
            
    },
    register: (req, res) => res.render("users/register"),

    store: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render ("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            } );
        } else {
            try {
                let newUser = await db.User.create({
                    name: req.body.nombre,
                    email: req.body.email,
                    domicilio: req.body.domicilio,
                    interes: req.body.interes,
                    suscripcion: req.body.suscripcion,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    // PENDIENTE AGREGAR UNA IMAGEN A ESTA RUTA
                    image: req.file == undefined ? 'default-user.jpg' : req.file.filename
                })
                res.redirect('/user/login')
            } catch (error) {
                throw error
            }
        }
        
        // JSON junto datos del usuario a crear    
        /* let userToCreate = {...req.body,password: bcryptjs.hashSync(req.body.password, 10),image: req.file.filename
        }let userCreated = db.User.c
        // userModel.create(userToCreate); return res.redirect("/user/login")  */
    },

    profile: (req, res) => {
        return res.render("users/userProfile", {
            user: req.session.userLogged
        })
    },
    logout: (req, res) => {
		res.clearCookie('user');
		req.session.destroy();
		return res.redirect('/');
	}
    }


// exportamos el resultado
module.exports = usersController