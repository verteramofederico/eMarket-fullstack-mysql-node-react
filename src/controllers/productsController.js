// fuente de datos
const path = require("path")
const router = require("../routes/productsRouter")

// objeto literal con acciones para cada ruta

const productsController = {
    ProducDetail: (req, res) => res.render("products/productDetail"),
    ProductCar: (req, res) => res.render("products/productCart"),
    ProductCreate: (req, res) => res.render("products/productCreate"),
    ProductEdit: (req, res) => res.render("products/productEdit")
    }


// exportamos el resultado
module.exports = productsController