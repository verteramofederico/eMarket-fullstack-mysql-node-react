const path = require('path');
const db = require('../../database/models');
const sequelize = require("sequelize");
const { Op } = sequelize;
const moment = require('moment');
const { like } = Op


const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: {
                    count: products.length,
                    countByCategory: products.length,
                    products
                }
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    }    
}

module.exports = productsAPIController;