// fuente de datos
const path = require("path")
const router = require("../routes/mainRouter")

const productModel = require("../trash/models/products")

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const { like } = Op;

const mainController = {

    home: (req, res) => 
            {
                db.Product.findAll({ 
                    include:['colors', "sizes", "brand", "categories"]
                })
                .then(product => {
                    res.render('home', {product})
                })
                .catch(err => {res.send(err)})
            },
    /* Json
    res.render("home", {product:productModel.all()}), */
    
    nosotros: (req, res) => res.render("nosotros"),
    }


// exportamos el resultado
module.exports = mainController