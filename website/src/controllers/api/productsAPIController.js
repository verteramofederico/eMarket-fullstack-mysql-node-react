const path = require('path');
const db = require('../../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const moment = require('moment');
const { like } = Op


const productsAPIController = {
    index: async (req, res) => {
        try {
            //Cosas para contar productos por categorias 
            const categories = await db.Category.findAll();
            let categoriesArray = [];
            categories.forEach(async category =>{
                let categoryProductTotal = await db.Product.count({where:{categoriesId: category.id}})
                var categoryCount = {name: category.name, total: categoryProductTotal}
                categoriesArray.push(categoryCount);
            });

            const products = await db.Product.findAll({include: ['brand',"colors","sizes",'categories'], attributes: ['id','price','name','description', "image"]})
            const totalProducts = products.length;
            
            //Agregando link para detalle producto
            products.forEach(product =>{
                product.dataValues.detail = `http://localhost:3001/api/products/${product.id}`;
                product.dataValues.imageUrl = `http://localhost:3001/uploads/products/${product.image}`
            });

            res.status(200).json({status:200, count: totalProducts, countByCategory:categoriesArray, products: products})

        }catch (error) {
            throw error;
        }
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {include: ['brand',"colors","sizes",'categories'], attributes: ['id','name','description', "image"]})
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id' //req params
                    },
                    data: {product: product,
                    urlImage: `http://localhost:3001/uploads/products/${product.image}`
                        
                    }
                }
                res.json(respuesta);
            });
    }    
}

module.exports = productsAPIController;