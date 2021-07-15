// fuente de datos
const path = require("path")
const router = require("../routes/productsRouter")


const productModel = require("../models/products")
const color = require('../models/color');
const size = require('../models/size');

// objeto literal con acciones para cada ruta

const productsController = {
    ProductAll: (req, res) => res.render("products/products", {product:req.params.category?productModel.filter(req.params.category):productModel.allWithExtra()}) ,
    ProducDetail: (req, res) => res.render("products/productDetail", {product:productModel.one(req.params.id)}),
    /* ProductCart: (req, res) => res.render("products/productCart"), */
    ProductCreate: (req, res) => res.render("products/productCreate", {colors:color.all(),sizes:size.all()}),
    ProductEdit: (req, res) => res.render("products/productEdit", {product:productModel.one(req.params.id),colors: color.all(),sizes:size.all()}),
    ProductEditImage: (req, res) => res.render("products/productEditImage", {product:productModel.one(req.params.id)}),
    store: (req, res) => {
        let result = productModel.new(req.body,req.file)
        return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion") 
    },
    update: (req, res) => {
        let result = productModel.edit(req.body,req.params.id)
        return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion") 
    },
    updateImage: (req, res) => {
        let result = productModel.editImage(req.file,req.params.id)
        return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion") 
    },
    destroy : (req, res) => {
        let result = productModel.delete(req.params.id);
        return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion") 
    }
    }


// exportamos el resultado
module.exports = productsController