// fuente de datos
const path = require("path")
const router = require("../routes/usersRouter")

// objeto literal con acciones para cada ruta

const usersController = {
    login: (req, res) => res.render("users/login"),
    register: (req, res) => res.render("users/register"),
    }


// exportamos el resultado
module.exports = usersController