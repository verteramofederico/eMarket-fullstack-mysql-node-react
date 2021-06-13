// fuente de datos
const path = require("path")
const router = require("../routes/productsRouter")

// objeto literal con acciones para cada ruta

const productsController = {
    ProducDetail: (req, res) => res.render("products/productDetail"),
    ProductCar: (req, res) => res.render("products/productCar")
    }


// exportamos el resultado
module.exports = productsController