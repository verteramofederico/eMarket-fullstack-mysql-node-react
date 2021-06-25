// fuente de datos
const path = require("path")
const router = require("../routes/productsRouter")


const productModel = require("../models/products")

// objeto literal con acciones para cada ruta

const productsController = {
    ProducDetail: (req, res) => res.render("products/productDetail", {product:productModel.one(req.params.id)}),
    ProductCart: (req, res) => res.render("products/productCart"),
    ProductCreate: (req, res) => res.render("products/productCreate"),
    ProductEdit: (req, res) => res.render("products/productEdit"),
    store: (req, res) => {
        let result = productModel.new(req.body,req.file)
        return result == true ? res.redirect("products") : res.send("Error al cargar la informacion") 
    },
    update: (req, res) => {
        let result = productModel.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },
    destroy : (req, res) => {
        let result = productModel.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    }
    }


// exportamos el resultado
module.exports = productsController