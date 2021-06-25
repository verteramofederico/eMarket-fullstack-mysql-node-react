// fuente de datos
const path = require("path")
const router = require("../routes/mainRouter")

const productModel = require("../models/products")

// objeto literal con acciones para cada ruta

const mainController = {
    home: (req, res) => res.render("home", {product:productModel.all()}),
    nosotros: (req, res) => res.render("nosotros"),
    }


// exportamos el resultado
module.exports = mainController