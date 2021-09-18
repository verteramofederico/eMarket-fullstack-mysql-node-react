// fuente de datos
const path = require("path")
const router = require("../routes/productsRouter")
const { validationResult } = require('express-validator');

// Modelos Json // Borrar
const productModel = require("../trash/models/products")
const color = require('../trash/models/color');
const size = require('../trash/models/size');

// Modelos Sequelize
const db = require('../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const { like } = Op



// objeto literal con acciones para cada ruta

const productsController = {
    ProductAll: (req, res) => {
        db.Product.findAll({
            include: ['colors', "sizes", "brand", "categories"]
        })
            .then(product => {
                // return res.send (products)
                res.render('products/products', {
                    product:req.params.category?product.filter(product => product.categoriesId == req.params.category):product
                })
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
                res.render('products/productDetail', {product});
            })
            .catch(error => res.send(error)) 
            ;
        },
    // Json res.render("products/productDetail", {product:productModel.one(req.params.id)}),

    ProductCreate: (req, res) => 
        {
            let promBrand = db.Brand.findAll();
            let promColor = db.Color.findAll();
            let promSize = db.Size.findAll();
            let promCategory = db.Category.findAll();
            
            Promise  
            .all([promBrand, promColor, promSize, promCategory ])
            .then(([brands, colors, sizes, categories ]) => {
                return res.render("products/productCreate", {colors, sizes, brands, categories })})
            .catch(error => res.send(error))
        },
    // Json res.render("products/productCreate", {colors:color.all(),sizes:size.all()}), 
    
    ProductEdit: (req, res) => {

        let promProducts = db.Product.findByPk(req.params.id,
            {include: ['colors', "sizes", "brand", "categories"]})
        let promBrand = db.Brand.findAll();
        let promColor = db.Color.findAll();
        let promSize = db.Size.findAll();
        let promCategory = db.Category.findAll();

        Promise
        .all([promProducts, promBrand, promColor, promSize, promCategory ])
        .then(([product, brands, colors, sizes, categories ]) => {
            return res.render("products/productEdit", {product, brands, colors, sizes, categories})})
            .catch(error => res.send(error))
    },
    
    // Json res.render("products/productEdit", {product:productModel.one(req.params.id),colors: color.all(),sizes:size.all()}),

    ProductEditImage: (req, res) => {

        let promProducts = db.Product.findByPk(req.params.id);
        Promise
        .all([promProducts])
        .then(([product]) => {
            return res.render("products/productEditImage", {product})})
            .catch(error => res.send(error))
        },
    //res.render("products/productEditImage", {product:productModel.one(req.params.id)}),
    
    store: async (req, res) => {
            //return res.send(req.body)
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render ("products/productCreate", {
                errors: resultValidation.mapped(),
                oldData: req.body
                } );
        } else {
            try {
                const product = await db.Product.create({
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,                    
                    brandId: req.body.brands,
                    
                    categoriesId: req.body.category,
                    image: req.file.filename,
                    offer: req.body.offer,
                    outstanding: req.body.outstanding,
                    discount: req.body.discount                   
                })       
                const colors = await product.setColors(req.body.colors)
                const sizes = await product.setSizes(req.body.size)     
                    return res.redirect("/product/all") 
                
            } catch (error) {
                res.send(error)
            }
        }   
        /* JSON let result = productModel.new(req.body,req.file) return result == true ? res.redirect("/product/all") : res.send("Error al cargar la informacion")  */
    },
    update: async(req, res) => {
        try {        
            let productId = req.params.id;
            const updated = await db.Product
            .update(
                {
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,                    
                    brandId: req.body.brands,                
                    categoriesId: req.body.category,
                    offer: req.body.offer,
                    outstanding: req.body.outstanding,
                    discount: req.body.discount          
                },
                {
                    where: {id: productId}
                })
                const product = await db.Product.findByPk(productId)
                const colors = await product.setColors(req.body.colors)
                const sizes = await product.setSizes(req.body.size)      
                return res.redirect('/product/all')
        } 
        catch (error) {
            res.send(error)
        }

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
    destroy: async (req,res) => {
        let productId = req.params.id;
        try {
            await db.colorsproducts.destroy({ where: {productId: productId}});
            await db.sizesproduct.destroy({ where: {productId: productId}});
            await db.Product.destroy({ where: {id: productId}})
            return res.redirect('/product/all');
        } catch (error) {
            res.send (error);
        }
    }
    }


// exportamos el resultado
module.exports = productsController