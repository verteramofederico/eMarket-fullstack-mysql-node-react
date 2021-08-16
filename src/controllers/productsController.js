// fuente de datos
const path = require("path")
const router = require("../routes/productsRouter")

// Modelos Json // Borrar
const productModel = require("../models/products")
const color = require('../models/color');
const size = require('../models/size');

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const { like } = Op



// objeto literal con acciones para cada ruta

const productsController = {
    ProductAll: (req, res) => {
        db.Product.findAll({
            include: ["brand"]
        })
            .then(product => {
                // return res.send (products) // si esto funciona ok lo borro y dejo la siguiente:
                res.render('products/products', {product})
            })
            .catch(error => res.send(error)) 
        },
    
        // Json res.render("products/products", {product:req.params.category?productModel.filter(req.params.category):productModel.allWithExtra()}) ,


    ProducDetail: (req, res) => 
        {
        db.Product.findByPk(req.params.id,
            {
                include: ['colors', "sizes", "brand", "categories"]
            })
            .then(product => {
                res.render('productDetail', {product});
            })
            .catch(error => res.send(error)) 
            ;
        },
    // Json res.render("products/productDetail", {product:productModel.one(req.params.id)}),

    ProductCreate: (req, res) => 
        {
            let promBrand = Brand.findAll();
            let promColor = Color.findAll();
            let promSize = Size.findAll();
            let promCategory = Category.findAll();
            
            Promise  // palabra promise sirve para algo?
            // all?
            .all([promBrand, promColor, promSize, promCategory ])
            .then(([colors, sizes, brands, categories ]) => {
                return res.render("products/productCreate", {colors, sizes, brands, categories })})
            .catch(error => res.send(error))
        },
    // Json res.render("products/productCreate", {colors:color.all(),sizes:size.all()}), 
    
    ProductEdit: (req, res) => {

        let productId = req.params.id;
        let promProducts = db.Product.findByPk([productId],{include: ['colors', "sizes", "brand", "categories"]});
        let promBrand = Brand.findAll();
        let promColor = Color.findAll();
        let promSize = Size.findAll();
        let promCategory = Category.findAll();

        Promise
        .all([promProducts, promBrand, promColor, promSize, promCategory])
        .then(([product, colors, sizes, brands, categories ]) => {
            return res.render("products/productEdit", {product, colors, sizes, brands, categories})})
            .catch(error => res.send(error))
    },
    
    // Json res.render("products/productEdit", {product:productModel.one(req.params.id),colors: color.all(),sizes:size.all()}),

    ProductEditImage: (req, res) => {

        let productId = req.params.id;
        let promProducts = db.Product.findByPk([productId]);
        Promise
        .all([promProducts])
        .then(([product]) => {
            return res.render("products/productEditImage", {product})})
            .catch(error => res.send(error))
        },
    //res.render("products/productEditImage", {product:productModel.one(req.params.id)}),
    
    store: (req, res) => {
            db.Product.create(
                {
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    colorId: req.body.colorId,
                    brandId: req.body.brandId,
                    sizeId: req.body.sizeId,
                    categoryId: req.body.categoryId,
                    image: req.file.filename,
                    offer: req.body.offer,
                    outstanding: req.body.outstanding,
                    discount: req.body.discount                   
                }
            )
            .then(()=> {
                return res.redirect("/product/all")})            
            .catch(error => res.send(error))
        /* JSON let result = productModel.new(req.body,req.file) return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion")  */
    },
    update: (req, res) => {
        let productId = req.params.id;
        db.Product
        .update(
            {
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    colorId: req.body.colorId,
                    brandId: req.body.brandId,
                    sizeId: req.body.sizeId,
                    categoryId: req.body.categoryId,
                    offer: req.body.offer,
                    outstanding: req.body.outstanding,
                    discount: req.body.discount          
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/product/all')})            
        .catch(error => res.send(error))

        /*  Json let result = productModel.edit(req.body,req.params.id) return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion")  */
    },
    updateImage: (req, res) => {
        let productId = req.params.id;
        db.Product
        .update(
            {
                    image: req.file.filename      
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/product/all')})            
        .catch(error => res.send(error))


        /* let result = productModel.editImage(req.file,req.params.id)
        return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion")  */
    },
    destroy : (req, res) => {
        let productId = req.params.id;
        db.Product
        .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/product/all')})
        .catch(error => res.send(error)) 

        /* let result = productModel.delete(req.params.id);
        return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion")  */
    }
    }


// exportamos el resultado
module.exports = productsController