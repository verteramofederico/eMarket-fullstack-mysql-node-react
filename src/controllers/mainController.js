// fuente de datos
const path = require("path")
const router = require("../routes/mainRouter")

// objeto literal con acciones para cada ruta

const mainController = {
    home: (req, res) => res.render("home"),
    nosotros: (req, res) => res.render("nosotros"),
    }


// exportamos el resultado
module.exports = mainController